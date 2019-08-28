import React from 'react'
import { Prose } from '@madetech/frontend'
import HubSpotForm from './HubSpotForm'
import documentToHtmlString from '../../helpers/documentToHtmlString'
import toHtmlId from '../../helpers/toHtmlId'
import JobsBoard from '../JobsBoard'

function GridContainer({ alignItems, children, id, layout, style }) {
  let className = 'contentful-grid'
  if (style) className += ` ${style}`

  let rowClassName = 'row'
  if (alignItems) rowClassName += ` align-items-${alignItems}`

  let containerClassName = 'container'
  if(layout === 'fluid') containerClassName += '-fluid'

  return (
    <div className={className} id={id}>
      <div className={containerClassName}>
        <div className={rowClassName}>{children}</div>
      </div>
    </div>
  )
}

function GridCol({ children, columnWidth, columnOffset }) {
  columnWidth = columnWidth || 12
  columnOffset = columnOffset || 0

  const className = `col-lg-${columnWidth} offset-lg-${columnOffset} my-2`

  return <div className={className}>{children}</div>
}

function GridProse({ image, imageStyle, html, textAlign }) {
  let className = 'contentful-prose'
  if (textAlign) className += ` text-${textAlign}`

  let imageComponent
  if (image) {
    let imageClassName = imageStyle || ''

    imageComponent = (
      <img alt={image.title} className={imageClassName} src={image.fixed.src} />
    )
  }

  let proseComponent
  if (html) {
    proseComponent = (
      <Prose>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Prose>
    )
  }

  return (
    <div className={className}>
      {imageComponent}

      {proseComponent}
    </div>
  )
}

function GridCard({ image, html, link }) {
  let cardContentComponent

  if (image) {
    cardContentComponent = (
      <>
        <div style={{ width: '35%' }}>
          <img alt={image.title} className="mw-100" src={image.fixed.src} />
        </div>

        <div style={{ width: '60%' }}>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </>
    )
  } else {
    cardContentComponent = <div dangerouslySetInnerHTML={{ __html: html }} />
  }

  return (
    <div className="contentful-card">
      <a href={link} className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            {cardContentComponent}
          </div>
        </div>
      </a>
    </div>
  )
}

function GridHubSpotForm({ formId, id }) {
  return <HubSpotForm formId={formId} id={id} />
}

function GridUnknownComponentError({ __typename }) {
  return <div>Unknown Content Type for Grid: {__typename}</div>
}

function GridComponentRenderer(content) {
  switch (content.__typename) {
    case 'ContentfulProse':
      return (
        <GridProse
          image={content.image}
          imageStyle={content.imageStyle}
          html={documentToHtmlString(content.body && content.body.json)}
          textAlign={content.textAlign}
        />
      )
    case 'ContentfulCard':
      return (
        <GridCard
          image={content.image}
          html={documentToHtmlString(content.body && content.body.json)}
          link={content.link}
        />
      )
    case 'ContentfulHubSpotForm':
      return (
        <GridHubSpotForm formId={content.formId} id={toHtmlId(content.name)} />
      )
    case 'ContentfulJobsBoard':
      return <JobsBoard />
    default:
      return <GridUnknownComponentError __typename={content.__typename} />
  }
}

function GridComponentArrayRenderer({ alignItems, content, id, layout, style }) {
  if (!content || content.length === 0) {
    throw new Error('No grid content provided')
  }

  return (
    <GridContainer alignItems={alignItems} id={id} layout={layout} style={style}>
      {content.map((content, i) => (
        <GridCol
          columnWidth={content.columnWidth}
          columnOffset={content.columnOffset}
          key={i}
        >
          <GridComponentRenderer key={i} {...content} />
        </GridCol>
      ))}
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
