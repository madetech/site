import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Contentful from '../../components/Contentful'

export default function ContentfulPageTemplate({ data }) {
  const page = data.contentfulPage

  return (
    <Layout
      customClasses={page.customClasses}
      description={page.description}
      featureFlags={page.featureFlags}
      titlePrefix={page.title}
    >
      <Contentful content={page.content} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    contentfulPage(id: { eq: $id }) {
      customClasses
      description
      featureFlags
      id
      title
      content {
        __typename
        ...hero
        ...highlight
        ...inlineImages
        ...jumbotron
        ...prose
        ... on ContentfulGrid {
          alignItems
          customClasses
          layout
          name
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
      fixed(width: 800) {
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
    textColor
  }
  fragment hero on ContentfulHero {
    name
    pageBreadcrumb2 {
      links {
        title
        url
      }
    }
    pageTitle
    sectionName
  }
  fragment prose on ContentfulProse {
    name
    body {
      json
    }
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
    imageStyle
    mediumColumnWidth
    mediumColumnOffset
    smallColumnWidth
    smallColumnOffset
    style
    textAlign
  }
  fragment highlight on ContentfulHighlight {
    name
    body {
      json
    }
    author
    colourOfElementAbove
    colourOfElementBelow
    gridWidth
    textAlign
    authorAvatar {
      fixed(width: 128, height: 128) {
        height
        src
        srcSet
        width
      }
    }
  }
`
