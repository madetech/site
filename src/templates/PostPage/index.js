import React from 'react'
import { graphql } from 'gatsby'
import striptags from 'striptags'
import withPrefix from '../../helpers/withPrefix'
import Layout from '../../components/Layout'
import Post from '../../components/Post'

export default function PostPageTemplate({ data }) {
  const post = data.wordpressPost
  const content = data.contentfulPage

  return (
    <Layout
      description={striptags(post.excerpt)}
      titlePrefix={post.title}
      url={withPrefix(`/blog/${post.slug}`)}
      image={post.jetpack_featured_media_url}
    >
      <Post post={post} withPrefix={withPrefix} content={content} />
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
      jetpack_featured_media_url
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

    contentfulPage(slug: { eq: "/blog-post" }) {
      name
      content {
        ... on ContentfulGrid {
          alignItems
          customClasses
          layout
          name
          id
          style
          content {
            __typename
            ... on ContentfulProse {
              name
              body {
                json
              }
              columnGroup
              columnWidth
              columnOffset
              customClasses
              extraLargeColumnWidth
              extraLargeColumnOffset
              extraSmallColumnWidth
              extraSmallColumnOffset
              image {
                fixed(width: 1000) {
                  height
                  src
                  srcSet
                  width
                }
              }
              imageUrl
              imageStyle
              mediumColumnWidth
              mediumColumnOffset
              screenReaderText
              smallColumnWidth
              smallColumnOffset
              style
              textAlign
              overlay
            }
          }
        }
      }
    }
  }
`
