const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const slash = require('slash')
const postTemplate = path.resolve('./src/templates/Post/index.js')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const query = graphql(`
      {
        allWordpressPost {
          edges {
            node {
              id
              slug
              status
              template
              format
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
}
