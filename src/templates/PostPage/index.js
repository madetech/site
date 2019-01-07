import React from 'react'
import { graphql } from 'gatsby'
import withPrefix from '../../helpers/withPrefix'
import { Jumbotron } from '@madetech/frontend'
import Layout from '../../components/Layout'
import Post from '../../components/Post'

export default function PostPageTemplate ({ data }) {
  const post = data.wordpressPost

  return (
    <Layout titlePrefix={post.title}>
      <Jumbotron extraClassName='mb-5 py-3'>
        <small><a href={withPrefix('')}>Made Tech Blog</a></small>
      </Jumbotron>

      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 offset-lg-2'>
            <Post post={post} />
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
        description
        name
      }
      categories {
        name
        slug
      }
      tags {
        name
        slug
      }
    }
  }
`
