import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Post from '../../components/Post'

export default function PostPageTemplate ({ data }) {
  return (
    <Layout>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 offset-md-2' style={{ fontSize: '1.3rem' }}>
            <Post post={data.wordpressPost} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
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
      }
    }
  }
`
