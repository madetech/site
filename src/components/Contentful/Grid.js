import React from 'react'
import { Prose } from '@madetech/frontend'
import HubSpotForm from './HubSpotForm'
import documentToHtmlString from '../../helpers/documentToHtmlString'
import toHtmlId from '../../helpers/toHtmlId'
import JobsBoard from '../JobsBoard'
import threeSpaceToLineBreak from '../../helpers/threeSpaceToLineBreak'

function GridContainer({
  alignItems,
  children,
  customClasses,
  id,
  layout,
  style,
}) {
  let className = 'contentful-grid'
  if (style) className += ` ${style}`
  if (customClasses) {
    customClasses.forEach(c => (className += ` ${c}`))
  }

  let rowClassName = 'row'
  if (alignItems) rowClassName += ` align-items-${alignItems}`

  let containerClassName = 'container'
  if (layout === 'fluid') containerClassName += '-fluid'

  return (
    <div className={className} id={id}>
      <div className={containerClassName}>
        <div className={rowClassName}>{children}</div>
      </div>
    </div>
  )
}

function GridCol({
  children,
  extraLargeColumnWidth,
  extraLargeColumnOffset,
  largeColumnWidth,
  largeColumnOffset,
  mediumColumnWidth,
  mediumColumnOffset,
  smallColumnWidth,
  smallColumnOffset,
  extraSmallColumnWidth,
  extraSmallColumnOffset,
}) {
  let colClasses = 'my-2'

  if (extraLargeColumnWidth !== null) {
    colClasses += ` col-xl-${extraLargeColumnWidth}`
  }

  if (extraLargeColumnOffset !== null) {
    colClasses += ` offset-xl-${extraLargeColumnOffset}`
  }

  if (largeColumnWidth !== null) {
    colClasses += ` col-lg-${largeColumnWidth}`
  }

  if (largeColumnOffset !== null) {
    colClasses += ` offset-lg-${largeColumnOffset}`
  }

  if (mediumColumnWidth !== null) {
    colClasses += ` col-md-${mediumColumnWidth}`
  }

  if (mediumColumnOffset !== null) {
    colClasses += ` offset-md-${mediumColumnOffset}`
  }

  if (smallColumnWidth !== null) {
    colClasses += ` col-sm-${smallColumnWidth}`
  }

  if (smallColumnOffset !== null) {
    colClasses += ` offset-sm-${smallColumnOffset}`
  }

  if (extraSmallColumnWidth !== null) {
    colClasses += ` col-${extraSmallColumnWidth}`
  }

  if (extraSmallColumnOffset !== null) {
    colClasses += ` offset-${extraSmallColumnOffset}`
  }

  return <div className={colClasses}>{children}</div>
}

function GridProse({ image, imageStyle, html, style, textAlign }) {
  let className = 'contentful-prose'
  if (textAlign) className += ` text-${textAlign}`
  if (style) className += ` ${style}`

  let imageComponent
  if (image) {
    let imageClassName = imageStyle || ''

    imageComponent = (
      <img alt={image.title} className={imageClassName} src={image.fixed.src} />
    )
  }
  var parsedHtml = threeSpaceToLineBreak(html, true)

  let proseComponent
  if (html) {
    proseComponent = (
      <Prose>
        <div dangerouslySetInnerHTML={{ __html: parsedHtml }} />
      </Prose>
    )
  }

  let gridProseComponent
  if (imageStyle === 'after') {
    gridProseComponent = (
      <div className={className}>
        {proseComponent}
        {imageComponent}
      </div>
    )
  } else {
    gridProseComponent = (
      <div className={className}>
        {imageComponent}
        {proseComponent}
      </div>
    )
  }

  return gridProseComponent
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
          style={content.style}
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

function GridComponentArrayRenderer({
  alignItems,
  customClasses,
  content,
  id,
  layout,
  style,
}) {
  if (!content || content.length === 0) {
    throw new Error('No grid content provided')
  }

  return (
    <GridContainer
      alignItems={alignItems}
      customClasses={customClasses}
      id={id}
      layout={layout}
      style={style}
    >
      {content.map((content, i) => (
        <GridCol
          extraLargeColumnWidth={content.extraLargeColumnWidth}
          extraLargeColumnOffset={content.extraLargeColumnOffset}
          extraSmallColumnWidth={content.extraSmallColumnWidth}
          extraSmallColumnOffset={content.extraSmallColumnOffset}
          largeColumnWidth={content.columnWidth}
          largeColumnOffset={content.columnOffset}
          mediumColumnWidth={content.mediumColumnWidth}
          mediumColumnOffset={content.mediumColumnOffset}
          smallColumnWidth={content.smallColumnWidth}
          smallColumnOffset={content.smallColumnOffset}
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
