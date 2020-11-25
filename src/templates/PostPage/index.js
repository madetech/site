import React from 'react'
import { graphql } from 'gatsby'
import striptags from 'striptags'
import withPrefix from '../../helpers/withPrefix'
import Layout from '../../components/Layout'
import Post from '../../components/Post'

export default function PostPageTemplate({ data }) {
  const header = data.contentfulHeader
  const post = data.wordpressPost
  const content = data.contentfulPage
  const footer = data.contentfulFooter
  const siteMap = data.contentfulSiteMapContainer
  return (
    <Layout
      description={striptags(post.excerpt)}
      titlePrefix={post.title}
      url={withPrefix(`/blog/${post.slug}`)}
      image={post.jetpack_featured_media_url}
      headerLinks={header.headerLinks}
      headerTitles={header.headerTitles}
      footerLinks={footer.footerLinks}
      footerTitles={footer.footerTitles}
      footerImages={footer.footerImages}
      siteMapContent={siteMap.siteMapContent}
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

    contentfulHeader(id: { eq: "dd6f31c4-cd8c-5623-abd5-8b65bbd030e0" }) {
      headerLinks
      headerTitles
    }

    contentfulSiteMapContainer(
      contentful_id: { eq: "177348cc-bbcd-582b-a394-7d26a58854c7" }
    ) {
      siteMapContent {
        siteMapLinks
        siteMapTitles
        sectionTitle
      }
    }

    contentfulFooter(id: { eq: "75b633fb-9030-5a1f-8b02-409d820fbe96" }) {
      footerLinks
      footerTitles
      footerImages {
        file {
          fileName
          url
        }
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
