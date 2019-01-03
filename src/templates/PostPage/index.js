import React from 'react'
import { graphql, withPrefix } from 'gatsby'
import Layout from '../../components/Layout'
import Post from '../../components/Post'

export default function PostPageTemplate ({ data }) {
  const { title } = data.wordpressPost
  const post = {
    ...data.wordpressPost,
    title: (
      <>
        <small><a href={withPrefix('')}>Made Tech Blog</a></small><br />
        <span dangerouslySetInnerHTML={{ __html: title }} />
      </>
    )
  }


  return (
    <Layout titlePrefix={title}>
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
