import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import PostList from '../../components/PostList'
import Pagination from '../../components/Pagination'

export default function Index ({ data, pageContext }) {
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

              <Pagination
                currentPage={pageContext.page}
                hrefPrefix='/blog'
                totalPages={pageContext.totalPages}
                />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($limit: Int!, $skip: Int!) {
    allWordpressPost(
      sort: { fields: [date], order: DESC },
      limit: $limit,
      skip: $skip
    ) {
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
