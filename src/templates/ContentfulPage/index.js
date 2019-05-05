import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Contentful from '../../components/Contentful'

export default function ContentfulPageTemplate({ data }) {
  const page = data.contentfulPage

  return (
    <Layout description={page.description} titlePrefix={page.title}>
      <Contentful content={page.content} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    contentfulPage(id: { eq: $id }) {
      id
      title
      description
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
            ...hubSpotForm
            ...prose
          }
        }
      }
    }
  }
  fragment card on ContentfulCard {
    name
    body {
      json
    }
    columnWidth
    columnOffset
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
  fragment hubSpotForm on ContentfulHubSpotForm {
    name
    columnWidth
    columnOffset
    formId
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
    background {
      fixed(width: 1600) {
        height
        src
        srcSet
        width
      }
    }
    body {
      json
    }
    columnWidth
    columnOffset
    textAlign
  }
  fragment prose on ContentfulProse {
    name
    body {
      json
    }
    columnWidth
    columnOffset
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
