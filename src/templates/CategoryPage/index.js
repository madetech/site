import React from 'react'
import { graphql } from 'gatsby'
import withPrefix from '../../helpers/withPrefix'
import Layout from '../../components/Layout'
import PostList, { PostListIntro } from '../../components/PostList'
import { Pagination } from '@madetech/frontend'

export default function PostPageTemplate({ data, pageContext }) {
  const category = data.wordpressCategory
  const posts = data.allWordpressPost.edges.map(({ node }) => node)

  return (
    <Layout description={category.description} titlePrefix={category.name}>
      <PostListIntro
        parent={
          <small>
            <a href={withPrefix('/blog')}>Made Tech Blog</a>
          </small>
        }
        title={category.name}
        description={category.description}
      />

      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <PostList posts={posts} />

            <Pagination
              currentPage={pageContext.page}
              hrefPrefix={withPrefix(`/blog/t/${category.slug}`)}
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
      filter: { categories: { elemMatch: { id: { eq: $id } } } }
      limit: $limit
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
