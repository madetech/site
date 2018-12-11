const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const slash = require('slash')
const postListPageTemplate = path.resolve('./src/templates/PostListPage/index.js')
const postPageTemplate = path.resolve('./src/templates/PostPage/index.js')
const categoryPageTemplate = path.resolve('./src/templates/CategoryPage/index.js')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

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
        createPage({
          path: i === 0 ? `/blog` : `/blog/${i + 1}`,
          component: postListPageTemplate,
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
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
      const postPerPage = 10
      const totalPages = Math.ceil(categoryEdges.length / postPerPage)

      Array.from({ length: totalPages }).forEach((_, i) => {
        categoryEdges.forEach(edge => {
          createPage({
            path: i == 0 ? `blog/t/${edge.node.slug}` : `blog/t/${edge.node.slug}/${i + 1}`,
            component: slash(categoryPageTemplate),
            context: {
              id: edge.node.id,
              limit: postPerPage,
              skip: i * postPerPage
            },
          })
        })
      })

      resolve()
    })
  })

  return Promise.all(
    createPostPages,
    createCategoryPages
  )
}
