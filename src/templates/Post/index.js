import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'

export default function PostTemplate ({ data }) {
  const post = data.wordpressPost
  const categoryNames = post.categories.map(c => c.name).join(', ')

  return (
    <Layout>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 offset-md-2' style={{ fontSize: '1.3rem' }}>
            <h1 className='py-5 text-center' dangerouslySetInnerHTML={{ __html: post.title }} />
            <p className='text-center'>{post.author.name} – {post.date} – {categoryNames}</p>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
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
        name
      }
      categories {
        name
      }
    }
  }
`
