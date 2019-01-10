import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Contentful from '../../components/Contentful'

export default function ContentfulPageTemplate ({ data }) {
  const page = data.contentfulPage

  return (
    <Layout titlePrefix={page.title}>
      <Contentful content={page.content} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    contentfulPage(id: { eq: $id }) {
      id
      title
      content {
      	__typename
        ...jumbotron
        ...inlineImages
        ...prose
        ... on ContentfulGrid {
          name
          style
          content {
            __typename
            ...prose
          }
        }
      }
    }
  }
  fragment inlineImages on ContentfulInlineImages {
    name
    caption
    images {
      fixed(width: 400) {
        height
        src
        srcSet
        width
      }
    }
  }
  fragment jumbotron on ContentfulJumbotron {
    name
    childContentfulJumbotronBodyRichTextNode {
      childContentfulRichText {
        html
      }
    }
    columnWidth
    columnOffset
    background {
      fixed(width: 1600) {
        height
        src
        srcSet
        width
      }
    }
  }
  fragment prose on ContentfulProse {
    name
    columnWidth
    columnOffset
    childContentfulProseBodyRichTextNode {
      childContentfulRichText {
        html
      }
    }
  }
`
