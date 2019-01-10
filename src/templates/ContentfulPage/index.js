import React from 'react'
import { graphql } from 'gatsby'
import { Jumbotron, Prose } from '@madetech/frontend'
import Layout from '../../components/Layout'

function renderContent (content, i) {
  switch (content.__typename) {
  case 'ContentfulInlineImages':
    const imageComponents = content.images.map((image, i) => {
      return (
        <img alt={image.title} className='mx-3 my-3' height='40' src={image.fixed.src} key={i} />
      )
    })

    return (
      <div className='container my-5 text-center' key={i}>
        <div className='row'>
          <div className='col-lg-10 offset-lg-1'>
            <p className='lead text-muted'>{content.caption}</p>

            <div className='d-lg-flex justify-content-between'>
              {imageComponents}
            </div>
          </div>
        </div>
      </div>
    )
  case 'ContentfulJumbotron':
    const jumbotronHtml = content.childContentfulJumbotronBodyRichTextNode.childContentfulRichText.html
    let backgroundUrl

    if (content.background) backgroundUrl = content.background.fixed.src

    return (
      <Jumbotron backgroundUrl={backgroundUrl} key={i}>
        <div className='container'>
          <div className='row'>
            <div className={`col-lg-${content.columnWidth} offset-lg-${content.columnOffset} px-4 py-5`}>
              <div className='lead' dangerouslySetInnerHTML={{ __html: jumbotronHtml }} />
            </div>
          </div>
        </div>
      </Jumbotron>
    )
  case 'ContentfulProse':
    const proseHtml = content.childContentfulProseBodyRichTextNode.childContentfulRichText.html

    return (
      <div className='py-5' key={i}>
        <Prose>
          <div className='container'>
            <div className='row'>
              <div className={`col-lg-${content.columnWidth} offset-lg-${content.columnOffset} px-4`}>
                <div dangerouslySetInnerHTML={{ __html: proseHtml }} />
              </div>
            </div>
          </div>
        </Prose>
      </div>
    )
  case 'ContentfulGrid':
    const contentComponents = content.content.map((content, i) => {
      switch (content.__typename) {
      case 'ContentfulProse':
        const proseHtml = content.childContentfulProseBodyRichTextNode.childContentfulRichText.html

        return (
          <div className={`col-lg-${content.columnWidth} offset-lg-${content.columnOffset} px-4`} key={i}>
            <Prose key={i}>
              <div dangerouslySetInnerHTML={{ __html: proseHtml }} />
            </Prose>
          </div>
        )
        default:
          return null
      }
    })

    return (
      <div className={`mt-5 ${content.style || ''}`} key={i}>
        <div className='container'>
          <div className='row'>
            {contentComponents}
          </div>
        </div>
      </div>
    )
  default:
    return null
  }
}

export default function ContentfulPageTemplate ({ data }) {
  const page = data.contentfulPage

  return (
    <Layout titlePrefix={page.title}>
      {page.content.map(renderContent)}
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
    columnWidth
    columnOffset
    childContentfulProseBodyRichTextNode {
      childContentfulRichText {
        html
      }
    }
  }
`
