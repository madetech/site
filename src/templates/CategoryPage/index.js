import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import PostList from '../../components/PostList'

export default function PostPageTemplate ({ data }) {
  const category = data.wordpressCategory
  const posts = data.allWordpressPost.edges.map(({ node }) => node)

  return (
    <Layout>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 offset-md-2' style={{ fontSize: '1.3rem' }}>
            <PostList
              title={category.name}
              description={category.description}
              posts={posts}
              />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    wordpressCategory(id: { eq: $id }) {
      description
      name
      slug
    }

  	allWordpressPost(filter: { categories: { elemMatch: { id: { eq: $id } } } }) {
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
