import React from 'react'
import { graphql } from 'gatsby'
import withPrefix from '../../helpers/withPrefix'
import Layout from '../../components/Layout'
import PostList, { PostListIntro } from '../../components/PostList'
import { Pagination } from '@madetech/frontend'

const highlightedTopics = [
  { name: 'Academy', slug: 'academy' },
  { name: 'Agile Transformation', slug: 'agile-transformation' },
  { name: 'Continuous Delivery', slug: 'continuous-delivery' },
  { name: 'DevOps', slug: 'devops' },
  { name: 'Diversity and Inclusion', slug: 'diversity-and-inclusion' },
  { name: 'Employers as Educators', slug: 'employers-as-educators' },
  { name: 'Extreme Programming', slug: 'extreme-programming' },
  { name: 'Press Releases', slug: 'press-releases' },
  { name: 'User-Centred Technology', slug: 'user-centred-technology' },
]

export default function Index({ data, pageContext }) {
  const posts = data.allWordpressPost.edges.map(({ node }) => node)

  return (
    <Layout
      description="Writings on building software delivery capabilities, delivering digital & technology, and running live services for ambitious organisations."
      titlePrefix="Blog"
    >
      <PostListIntro
        title="Made Tech Blog"
        description="Writings on building software delivery capabilities and delivering digital & technology outcomes for ambitious organisations."
        topics={highlightedTopics}
      />

      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <PostList posts={posts} />

            <Pagination
              currentPage={pageContext.page}
              hrefPrefix={withPrefix('/blog')}
              totalPages={pageContext.totalPages}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($limit: Int!, $skip: Int!) {
    allWordpressPost(
      sort: { fields: [date], order: DESC }
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
