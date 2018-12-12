import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import PostList from '../../components/PostList'
import { Pagination } from '@madetech/frontend'

export default function PostPageTemplate ({ data, pageContext }) {
  const category = data.wordpressCategory
  const posts = data.allWordpressPost.edges.map(({ node }) => node)

  return (
    <Layout>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 offset-lg-2' style={{ fontSize: '1.3rem' }}>
            <PostList
              title={category.name}
              description={category.description}
              posts={posts}
              />

            <Pagination
              currentPage={pageContext.page}
              hrefPrefix={`/blog/t/${category.slug}`}
              totalPages={pageContext.totalPages}
              />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!, $limit: Int!, $skip: Int!) {
    wordpressCategory(id: { eq: $id }) {
      description
      name
      slug
    }

  	allWordpressPost(
      filter: { categories: { elemMatch: { id: { eq: $id } } } },
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