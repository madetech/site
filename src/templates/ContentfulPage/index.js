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
        ...inlineImages
        ...jumbotron
        ...prose
        ... on ContentfulGrid {
          name
          alignItems
          style
          content {
            __typename
            ...card
            ...prose
          }
        }
      }
    }
  }
  fragment card on ContentfulCard {
    name
    columnWidth
    columnOffset
    childContentfulCardBodyRichTextNode {
      childContentfulRichText {
        html
      }
    }
    image {
      fixed(width: 800, height: 650) {
        height
        src
        srcSet
        width
      }
    }
    link
  }
  fragment inlineImages on ContentfulInlineImages {
    name
    caption
    columnWidth
    columnOffset
    constrainImageHeight
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
    textAlign
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
    image {
      fixed(width: 1000) {
        height
        src
        srcSet
        width
      }
    }
    imageStyle
    textAlign
  }
`
