import React from 'react'
import { graphql } from 'gatsby'
import striptags from 'striptags'
import withPrefix from '../../helpers/withPrefix'
import Layout from '../../components/Layout'
import Post from '../../components/Post'

export default function PostPageTemplate({ data }) {
  const post = data.wordpressPost

  return (
    <Layout
      description={striptags(post.excerpt)}
      titlePrefix={post.title}
      url={withPrefix(`/blog/${post.slug}`)}
      image={post.jetpack_featured_media_url}
    >
      <Post post={post} withPrefix={withPrefix} />
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
    },
    query($id: String!) {
      contentfulPage(id: { eq: $id }) {
        customClasses
        description
        featureFlags
        id
        title
        description {
              content {
                content {
                  value
                }
              }
            }
        slugUri
        ctaText
        bookImage {
              fluid {
                src
              }
            }
        themeStyleColour
            content {
              __typename
              ...bookPreview
            }
          }
        }
    fragment bookPreview on ContentfulBookPreview {
      title
    }
  }
`
