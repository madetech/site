const _ = require('lodash')
const glob = require('glob')
const fs = require('fs')
const util = require('util')
const md5 = require('md5')
const Promise = require('bluebird')
const path = require('path')
const slash = require('slash')
const contentfulPageTemplate = path.resolve(
  './src/templates/ContentfulPage/index.js'
)
const postListPageTemplate = path.resolve(
  './src/templates/PostListPage/index.js'
)
const postPageTemplate = path.resolve('./src/templates/PostPage/index.js')
const categoryPageTemplate = path.resolve(
  './src/templates/CategoryPage/index.js'
)

const eBookPreviewTemplate = path.resolve(
  './src/templates/EbookPreview/index.js'
)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const createContentfulPages = new Promise((resolve, reject) => {
    const query = graphql(`
      {
        allContentfulPage {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `)

    query.then(result => {
      if (result.errors) {
        console.error(result.errors)
        reject(result.errors)
      }

      const postEdges = result.data.allContentfulPage.edges

      postEdges.forEach(edge => {
        createPage({
          path:
            edge.node.slug.slice(0, 1) === '/'
              ? edge.node.slug
              : `/${edge.node.slug}`,
          component: slash(contentfulPageTemplate),
          context: {
            id: edge.node.id,
          },
        })
      })

      resolve()
    })
  })

  const createPostPages = new Promise((resolve, reject) => {
    const query = graphql(`
      {
        allWordpressPost {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `)

    query.then(result => {
      if (result.errors) {
        console.error(result.errors)
        reject(result.errors)
      }

      const postEdges = result.data.allWordpressPost.edges
      const postsPerPage = 10
      const totalPages = Math.ceil(postEdges.length / postsPerPage)

      Array.from({ length: totalPages }).forEach((_, i) => {
        const page = i + 1

        createPage({
          path: i === 0 ? `/blog` : `/blog/${page}`,
          component: postListPageTemplate,
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            page,
            totalPages,
          },
        })
      })

      postEdges.forEach(edge => {
        createPage({
          path: `/blog/${edge.node.slug}`,
          component: slash(postPageTemplate),
          context: {
            id: edge.node.id,
          },
        })
      })

      const queryContentful = graphql(`
        {
          allContentfulBookPreview {
            nodes {
              title
              description {
                content {
                  content {
                    value
                  }
                }
              }
              slugUri
              ctaText
              bookImage {
                fluid {
                  src
                }
              }
              themeStyleColour
            }
          }
        }
      `)

      queryContentful.then(result => {
        if (result.errors) {
          console.error(result.errors)
          reject(result.errors)
        }

        const eBookEdges = result.data.allContentfulBookPreview
        eBookEdges.forEach(edge => {
          createPage({
            path: edge.node.slug,
            component: slash(postPageTemplate),
            context: {
              slug: edge.node.slugUri,
            },
          })
        })

        resolve()
      })
    })

    const createCategoryPages = new Promise((resolve, reject) => {
      const query = graphql(`
        {
          allWordpressCategory {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `)

      query.then(result => {
        if (result.errors) {
          console.error(result.errors)
          reject(result.errors)
        }

        const categoryEdges = result.data.allWordpressCategory.edges

        Promise.map(categoryEdges, edge => {
          const query = graphql(`
          {
            allWordpressPost(
              filter: { categories: { elemMatch: { id: { eq: "${edge.node.id}" } } } }
            ) {
              edges {
                node {
                  id
                  slug
                }
              }
            }
          }
        `)

          return query.then(result => {
            if (result.errors) {
              console.error(result.errors)
              reject(result.errors)
            }

            if (!result.data.allWordpressPost) return

            const postEdges = result.data.allWordpressPost.edges
            const postsPerPage = 10
            const totalPages = Math.ceil(postEdges.length / postsPerPage)

            Array.from({ length: totalPages }).forEach((_, i) => {
              const page = i + 1

              createPage({
                path:
                  i == 0
                    ? `/blog/t/${edge.node.slug}`
                    : `/blog/t/${edge.node.slug}/${page}`,
                component: slash(categoryPageTemplate),
                context: {
                  id: edge.node.id,
                  limit: postsPerPage,
                  skip: i * postsPerPage,
                  page,
                  totalPages,
                },
              })
            })
          })
        }).then(() => resolve())
      })
    })

    const eBookPreview = new Promise((resolve, reject) => {
      const query = graphql(`
        {
          allContentfulPage {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `)

      query.then(result => {
        if (result.errors) {
          console.error(result.errors)
          reject(result.errors)
        }

        const eBookPreviewEdges = result.data.allContentfulPage.edges

        eBookPreviewEdges.forEach(edge => {
          createPage({
            path:
              edge.node.slug.slice(0, 1) === '/'
                ? edge.node.slug
                : `/${edge.node.slug}`,
            component: slash(contentfulPageTemplate),
            context: {
              id: edge.node.id,
            },
          })
        })

        resolve()
      })
    })

    return Promise.all([
      createContentfulPages,
      createPostPages,
      createCategoryPages,
      eBookPreview,
    ])
  })

  const hash = md5(`${new Date().getTime()}`)

  const addPageDataVersion = async file => {
    const stats = await util.promisify(fs.stat)(file)
    if (stats.isFile()) {
      console.log(`Adding version to page-data.json in ${file}..`)
      let content = await util.promisify(fs.readFile)(file, 'utf8')
      const result = content.replace(
        /page-data.json(\?v=[a-f0-9]{32})?/g,
        `page-data.json?v=${hash}`
      )
      await util.promisify(fs.writeFile)(file, result, 'utf8')
    }
  }

  exports.onPostBootstrap = async () => {
    const loader = path.join(
      __dirname,
      'node_modules/gatsby/cache-dir/loader.js'
    )
    await addPageDataVersion(loader)
  }

  exports.onPostBuild = async () => {
    const publicPath = path.join(__dirname, 'public')
    const htmlAndJSFiles = glob.sync(`${publicPath}/**/*.{html,js}`)
    for (let file of htmlAndJSFiles) {
      await addPageDataVersion(file)
    }
  }

  exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
      devtool: 'eval-source-map',
      resolve: {
        alias: { 'react-dom': '@hot-loader/react-dom' },
      },
    })
  }
}
