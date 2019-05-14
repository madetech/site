import React from 'react'
import { Prose } from '@madetech/frontend'
import HubSpotForm from './HubSpotForm'
import documentToHtmlString from '../../helpers/documentToHtmlString'
import toHtmlId from '../../helpers/toHtmlId'

function GridContainer({ alignItems, children, id, style }) {
  let className = 'contentful-grid'
  if (style) className += ` ${style}`

  let rowClassName = 'row'
  if (alignItems) rowClassName += ` align-items-${alignItems}`

  return (
    <div className={className} id={id}>
      <div className="container">
        <div className={rowClassName}>{children}</div>
      </div>
    </div>
  )
}

function GridProse({
  body,
  columnWidth,
  columnOffset,
  image,
  imageStyle,
  textAlign,
}) {
  const proseHtml = documentToHtmlString(body && body.json)

  let className = 'contentful-prose'
  if (textAlign) className += ` text-${textAlign}`

  let imageComponent
  if (image) {
    let imageClassName = imageStyle || ''

    imageComponent = (
      <img alt={image.title} className={imageClassName} src={image.fixed.src} />
    )
  }

  return (
    <div
      className={`col-lg-${columnWidth} offset-lg-${columnOffset} px-4 my-3`}
    >
      <div className={className}>
        {imageComponent}

        <Prose>
          <div dangerouslySetInnerHTML={{ __html: proseHtml }} />
        </Prose>
      </div>
    </div>
  )
}

function GridCard({ body, columnWidth, columnOffset, image, link }) {
  const cardHtml = documentToHtmlString(body && body.json)
  let cardContentComponent

  if (image) {
    cardContentComponent = (
      <>
        <div style={{ width: '35%' }}>
          <img
            alt={image.title}
            className="mw-100"
            src={image.fixed.src}
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
      className={`col-lg-${columnWidth} offset-lg-${columnOffset} px-4`}
    >
      <div className="contentful-card">
        <a href={link} className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              {cardContentComponent}
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

function GridComponentRenderer(content) {
  switch (content.__typename) {
    case 'ContentfulProse':
      return (
        <GridProse
          body={content.body}
          columnWidth={content.columnWidth}
          columnOffset={content.columnOffset}
          image={content.image}
          imageStyle={content.imageStyle}
          textAlign={content.textAlign}
        />
      )
    case 'ContentfulCard':
      return (
        <GridCard
          body={content.body}
          columnWidth={content.columnWidth}
          columnOffset={content.columnOffset}
          image={content.image}
          link={content.link}
        />
      )
    case 'ContentfulHubSpotForm':
      return (
        <div
          className={`col-lg-${content.columnWidth} offset-lg-${
            content.columnOffset
          } px-4 my-3`}
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
        >
          <div>Unknown Content Type for Grid: {content.__typename}</div>
        </div>
      )
  }
}

function GridComponentArrayRenderer({ alignItems, content, id, style }) {
  if (!content || content.length === 0) {
    throw new Error('No grid content provided')
  }

  const contentComponents = content.map((content, i) => (
    <GridComponentRenderer key={i} {...content} />
  ))

  return (
    <GridContainer alignItems={alignItems} id={id} style={style}>
      {contentComponents}
    </GridContainer>
  )
}

export default class Grid extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasRenderContentError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasRenderContentError: true }
  }

  componentDidCatch(error, info) {
    console.error(error)
  }

  render() {
    if (this.state.hasRenderContentError) {
      return <div>Grid Render Content Error</div>
    }

    return <GridComponentArrayRenderer {...this.props} />
  }
}
