import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

function Post ({ post }) {
  const categoryNames = post.categories.map(c => c.name).join(', ')

  return (
  <div className='pt-5'>
    <h2 className='h3 font-weight-bold'>
      <a href={`/${post.slug}`} dangerouslySetInnerHTML={{ __html: post.title }} />
    </h2>

    <div className='lead2' dangerouslySetInnerHTML={{ __html: post.excerpt }} />

    <div>{post.author.name} – {post.date} – {categoryNames}</div>
  </div>
  )
}

export default function Index ({ data }) {
  return (
    <Layout>
      <div className='container'>
        <div className='my-5 text-center'>
          <h1 className='display-4 font-weight-bold'>Made Tech Blog</h1>

          <p className='lead'>
            Written by Made Tech Software Engineers
          </p>
        </div>

        <div className='row'>
          <div className='col-md-7'>
            {data.allWordpressPost.edges.map(({ node }) => Post({ post: node }))}
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
            name
          }
          categories {
            name
          }
        }
      }
    }
  }
`
