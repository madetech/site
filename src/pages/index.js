import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostList from '../components/PostList'

export default function Index ({ data }) {
  const posts = data.allWordpressPost.edges.map(({ node }) => node)

  return (
    <Layout>
      <div className='post_list'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 offset-md-2'>
              <PostList
                title='Made Tech Blog'
                description='Writings on building software delivery capabilities, delivering digital & technology, and running live services for ambitious organisations.'
                posts={posts}
                />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          excerpt
          slug
          date(formatString: "Do MMMM YYYY")
          author {
            avatar_urls {
              wordpress_96
            }
            name
          }
          categories {
            name
            slug
          }
        }
      }
    }
  }
`
