import React from 'react'
import { Prose } from '@madetech/frontend'
import HubSpotForm from './HubSpotForm'
import documentToHtmlString from '../../helpers/documentToHtmlString'
import toHtmlId from '../../helpers/toHtmlId'

export default function Grid({ alignItems, content, id, style }) {
  if (content.length === 0) {
    return (
      <div>No Content Error</div>
    )
  }

  const contentComponents = content.map((content, i) => {
    switch (content.__typename) {
      case 'ContentfulProse':
        const proseHtml =
          content.body && documentToHtmlString(content.body.json)

        let className = 'contentful-prose'
        if (content.textAlign) className += ` text-${content.textAlign}`

        let imageComponent
        if (content.image) {
          let imageClassName = content.imageStyle || ''

          imageComponent = (
            <img
              alt={content.image.title}
              className={imageClassName}
              src={content.image.fixed.src}
            />
          )
        }

        return (
          <div
            className={`col-lg-${content.columnWidth} offset-lg-${
              content.columnOffset
            } px-4 my-3`}
            key={i}
          >
            <div className={className}>
              {imageComponent}

              <Prose key={i}>
                <div dangerouslySetInnerHTML={{ __html: proseHtml }} />
              </Prose>
            </div>
          </div>
        )
      case 'ContentfulCard':
        const cardHtml = content.body && documentToHtmlString(content.body.json)
        let cardContentComponent

        if (content.image) {
          cardContentComponent = (
            <>
              <div style={{ width: '35%' }}>
                <img
                  alt={content.image.title}
                  className="mw-100"
                  src={content.image.fixed.src}
                />
              </div>

              <div style={{ width: '60%' }}>
                <div dangerouslySetInnerHTML={{ __html: cardHtml }} />
              </div>
            </>
          )
        } else {
          cardContentComponent = (
            <div dangerouslySetInnerHTML={{ __html: cardHtml }} />
          )
        }

        return (
          <div
            className={`col-lg-${content.columnWidth} offset-lg-${
              content.columnOffset
            } px-4`}
            key={i}
          >
            <div className="contentful-card">
              <a href={content.link} className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    {cardContentComponent}
                  </div>
                </div>
              </a>
            </div>
          </div>
        )
      case 'ContentfulHubSpotForm':
        return (
          <div
            className={`col-lg-${content.columnWidth} offset-lg-${
              content.columnOffset
            } px-4 my-3`}
            key={i}
          >
            <HubSpotForm formId={content.formId} id={toHtmlId(content.name)} />
          </div>
        )
      default:
        return (
          <div
            className={`col-lg-${content.columnWidth} offset-lg-${
              content.columnOffset
            } px-4`}
            key={i}
          >
            <div>Unknown Content Type for Grid: {content.__typename}</div>
          </div>
        )
    }
  })

  let className = 'contentful-grid'
  if (style) className += ` ${style}`

  let rowClassName = 'row'
  if (alignItems) rowClassName += ` align-items-${alignItems}`

  return (
    <div className={className} id={id}>
      <div className="container">
        <div className={rowClassName}>{contentComponents}</div>
      </div>
    </div>
  )
}
