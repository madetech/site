import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Contentful from '../../components/Contentful'
import logo from '../../assets/images/made-tech-logo-colour.jpg'

export default function ContentfulPageTemplate({ data }) {
  const header = data.contentfulHeader
  const page = data.contentfulPage
  return (
    <Layout
      customClasses={page.customClasses}
      description={page.description}
      featureFlags={page.featureFlags}
      titlePrefix={page.title}
      headerTitles={header.headerTitles}
      headerLinks={header.headerLinks}
      image={
        page.content[0].headerImage
          ? `https:${page.content[0].headerImage.fixed.src}`
          : `https://www.madetech.com${logo}`
      }
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
        ... on ContentfulCarousel {
          name
          images {
            fixed(height: 500) {
              src
              srcSet
              width
            }
          }
          dots
          slidesToShow
          content {
            __typename
            ...prose
          }
          style
        }
        ...headerImages
        ...highlight
        ...inlineImages
        ...jumbotron
        ...prose
        ... on ContentfulGrid {
          alignItems
          customClasses
          layout
          name
          id
          style
          content {
            __typename
            ...card
            ...hubSpotForm
            ...prose
            ...tweet
            ...jobsBoard
            ...imageLink
            ...dripForm
          }
        }
      }
    }

    contentfulHeader(id: { eq: "dd6f31c4-cd8c-5623-abd5-8b65bbd030e0" }) {
      headerLinks
      headerTitles
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
    buttonColour
  }
  fragment dripForm on ContentfulDripForm {
    dripFormId
    formFields
    formTags
    headline
    formDescription {
      formDescription
    }
  }
  fragment inlineImages on ContentfulInlineImages {
    name
    caption
    columnWidth
    columnOffset
    constrainImageHeight
    images {
      fixed(height: 1000) {
        height
        src
        srcSet
        width
      }
      resize(height: 400) {
        src
      }
    }
    overlay
  }
  fragment imageLink on ContentfulImageLink {
    url
    image {
      fixed(width: 600) {
        height
        src
        srcSet
        width
      }
    }
    linkText
    extraLargeColumnWidth
    extraLargeColumnOffset
    largeColumnWidth
    largeColumnOffset
    mediumColumnWidth
    mediumColumnOffset
    smallColumnWidth
    smallColumnOffset
    extraSmallColumnWidth
    extraSmallColumnOffset
  }
  fragment jumbotron on ContentfulJumbotron {
    id
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
    isHeader
    pageBreadcrumb {
      links {
        title
        url
      }
    }
    pageTitle
    body {
      json
    }
    headerImage {
      fixed(width: 1780) {
        height
        src
        srcSet
        width
      }
      resize(width: 300) {
        src
      }
    }
    headerImageLayout
    headerImageShadowColour
    textColour
    textSize
    backgroundColour
    customClasses
    headerLinks {
      ... on Node {
        ... on ContentfulGrid {
          id
          name
          linkTitle
        }
        ... on ContentfulJumbotron {
          id
          name
        }
        ... on ContentfulHighlight {
          id
          name
        }
        ... on ContentfulPage {
          id
          name
          title
          slug
        }
      }
    }
  }

  fragment prose on ContentfulProse {
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
  fragment highlight on ContentfulHighlight {
    id
    name
    body {
      json
    }
    author
    extraLargeColumnWidth
    extraSmallColumnWidth
    largeColumnWidth
    mediumColumnWidth
    smallColumnWidth
    textAlign
    authorAvatar {
      fixed(width: 128, height: 128) {
        height
        src
        srcSet
        width
      }
    }
    customClasses
  }
  fragment tweet on ContentfulTweet {
    name
    columnWidth
    columnOffset
    extraLargeColumnWidth
    extraLargeColumnOffset
    extraSmallColumnWidth
    extraSmallColumnOffset
    mediumColumnWidth
    mediumColumnOffset
    smallColumnWidth
    smallColumnOffset
    tweetId
  }
  fragment headerImages on ContentfulHeaderImages {
    name
    extraLarge {
      fixed(width: 2280) {
        src
      }
    }
    large {
      fixed(width: 1920) {
        src
      }
    }
    medium {
      fixed(width: 1440) {
        src
      }
    }
    small {
      fixed(width: 1080) {
        src
      }
    }
  }
  fragment jobsBoard on ContentfulJobsBoard {
    title
    columnWidth
    columnOffset
    extraLargeColumnWidth
    extraLargeColumnOffset
    extraSmallColumnWidth
    extraSmallColumnOffset
    mediumColumnWidth
    mediumColumnOffset
    smallColumnWidth
    smallColumnOffset
  }
`
