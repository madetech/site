const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const slash = require('slash')
const contentfulPageTemplate = path.resolve('./src/templates/ContentfulPage/index.js')
const postListPageTemplate = path.resolve('./src/templates/PostListPage/index.js')
const postPageTemplate = path.resolve('./src/templates/PostPage/index.js')
const categoryPageTemplate = path.resolve('./src/templates/CategoryPage/index.js')

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
          path: `/${edge.node.slug}`,
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
            totalPages
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
              path: i == 0 ? `/blog/t/${edge.node.slug}` : `/blog/t/${edge.node.slug}/${page}`,
              component: slash(categoryPageTemplate),
              context: {
                id: edge.node.id,
                limit: postsPerPage,
                skip: i * postsPerPage,
                page,
                totalPages
              },
            })
          })
        })
      }).then(() => resolve())
    })
  })

  return Promise.all([
    createContentfulPages,
    createPostPages,
    createCategoryPages
  ])
}
