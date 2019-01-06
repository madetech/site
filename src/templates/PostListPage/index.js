import React from 'react'
import { graphql } from 'gatsby'
import withPrefix from '../../helpers/withPrefix'
import Layout from '../../components/Layout'
import PostList, { PostListIntro } from '../../components/PostList'
import { Pagination } from '@madetech/frontend'

const highlightedTopics = [
  { name: 'Agile Transformation', slug: 'agile-transformation' },
  { name: 'Continuous Delivery', slug: 'continuous-delivery' },
  { name: 'Cloud Automation', slug: 'cloud-automation' },
  { name: 'DevOps', slug: 'devops' },
  { name: 'Docker', slug: 'docker' },
  { name: 'Extreme Programming', slug: 'extreme-programming-xp' },
  { name: 'Upskilling & Training', slug: 'upskilling-and-training' },
  { name: 'Press Releases', slug: 'press-releases' },
  { name: 'Software Architecture', slug: 'software-architecture' },
]

export default function Index ({ data, pageContext }) {
  const posts = data.allWordpressPost.edges.map(({ node }) => node)

  return (
    <Layout>
      <div className='post_list'>
        <PostListIntro
          title='Made Tech Blog'
          description='Writings on building software delivery capabilities, delivering digital & technology, and running live services for ambitious organisations.'
          topics={highlightedTopics}
          />

        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 offset-lg-2'>
              <PostList posts={posts} />

              <Pagination
                currentPage={pageContext.page}
                hrefPrefix={withPrefix('')}
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
