const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const slash = require('slash')
const postTemplate = path.resolve('./src/templates/PostPage/index.js')
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

      result.data.allWordpressPost.edges.forEach(edge => {
        createPage({
          path: edge.node.slug,
          component: slash(postTemplate),
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

      result.data.allWordpressCategory.edges.forEach(edge => {
        createPage({
          path: `t/${edge.node.slug}`,
          component: slash(categoryPageTemplate),
          context: {
            id: edge.node.id,
          },
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
