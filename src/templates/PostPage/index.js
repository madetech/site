import React from 'react'
import { graphql } from 'gatsby'
import withPrefix from '../../helpers/withPrefix'
import { Jumbotron } from '@madetech/frontend'
import Layout from '../../components/Layout'
import Post from '../../components/Post'
import BookPreview from '../../components/BookPreview'

export default function PostPageTemplate({ data }) {
  const post = data.wordpressPost

  return (
    <Layout
      description={post.excerpt}
      titlePrefix={post.title}
      url={withPrefix(`/blog/${post.slug}`)}
    >
      <Jumbotron extraClassName="mb-3 py-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <strong>
                <a href={withPrefix('/blog')}>Made Tech Blog</a>
              </strong>
            </div>
          </div>
        </div>
      </Jumbotron>

      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <Post post={post} />
          </div>
        </div>
      </div>
      <BookPreview />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      excerpt
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
