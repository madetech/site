import React from 'react'
import { Prose } from '@madetech/frontend'
import HubSpotForm from './HubSpotForm'
import ImageLink from './ImageLink'
import documentToHtmlString from '../../helpers/documentToHtmlString'
import toHtmlId from '../../helpers/toHtmlId'
import JobsBoard from '../JobsBoard'
import threeSpaceToLineBreak from '../../helpers/threeSpaceToLineBreak'
import threeHyphenToSoftHyphen from '../../helpers/threeHyphenToSoftHyphen'
import Tweet from './Tweet'

function GridContainer({
  alignItems,
  children,
  customClasses,
  id,
  real_id,
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
      <a id={real_id}></a>
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

function GridProse({
  customClasses,
  image,
  imageUrl,
  imageStyle,
  html,
  screenReaderText,
  style,
  textAlign,
}) {
  let className = 'contentful-prose'
  if (textAlign) className += ` text-${textAlign}`
  if (style) className += ` ${style}`
  if (customClasses) {
    customClasses.forEach(c => (className += ` ${c}`))
  }

  if (screenReaderText) {
    className += ' screen-reader'
  }

  let imageComponent
  if (image && image.fixed) {
    let imageClassName = imageStyle || ''

    // gatsbys fixed image width is giving us image quality problems.
    // removing the specified width sorts this out
    // need to investigate further...
    let imageSrc = image.fixed.src.split('?')[0]

    imageComponent = (
      <img alt={image.title} className={imageClassName} src={imageSrc} />
    )
  }

  if (imageUrl) {
    imageComponent = (
      <a href={imageUrl} target="_blank" rel="noopener noreferrer">
        {imageComponent}
      </a>
    )
  }

  let parsedHtml = threeSpaceToLineBreak(html, true)
  parsedHtml = threeHyphenToSoftHyphen(parsedHtml, true)

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

  if (image && image.fixed) {
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

function GridTweet({ tweetId }) {
  return <Tweet tweetId={tweetId}></Tweet>
}

function GridUnknownComponentError({ __typename }) {
  return <div>Unknown Content Type for Grid: {__typename}</div>
}

function GridImageLink({ html, image }) {
  return <ImageLink html={html} image={image} />

  // let imageComponent
  // if (image && image.fixed) {
  //
  //   // gatsbys fixed image width is giving us image quality problems.
  //   // removing the specified width sorts this out
  //   // need to investigate further...
  //   let imageSrc = image.fixed.src.split('?')[0]
  //
  //   imageComponent = (
  //       <img alt={image.title} src={imageSrc} />
  //   )
  // }
  //
  // let parsedHtml = threeSpaceToLineBreak(html, true)
  // parsedHtml = threeHyphenToSoftHyphen(parsedHtml, true)
  //
  // let linkComponent
  //
  // linkComponent = (
  //       <div dangerouslySetInnerHTML={{ __html: parsedHtml }} />
  // )
  //
  //
  // let gridImageLinkComponent
  // gridImageLinkComponent = (
  //     <div>
  //       {imageComponent}
  //       {linkComponent}
  //     </div>
  // )
  // return gridImageLinkComponent
}

function GridComponentRenderer(content) {
  switch (content.__typename) {
    case 'ContentfulProse':
      return (
        <GridProse
          columnGroup={content.columnGroup}
          customClasses={content.customClasses}
          image={content.image}
          imageUrl={content.imageUrl}
          imageStyle={content.imageStyle}
          html={documentToHtmlString(content.body && content.body.json)}
          screenReaderText={content.screenReaderText}
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
    case 'ContentfulTweet':
      return <GridTweet tweetId={content.tweetId} />
    case 'ContentfulImageLink':
      return <GridImageLink html={content.textLink} image={content.image} />
    default:
      return <GridUnknownComponentError __typename={content.__typename} />
  }
}

function GridComponentArrayRenderer({
  alignItems,
  customClasses,
  content,
  id,
  real_id,
  name,
  layout,
  style,
}) {
  if (!content || content.length === 0) {
    throw new Error('No grid content provided')
  }
  const groupedContent = content.reduce((grouped, c, i) => {
    let key = `columnGroup-${i}`
    if (c.columnGroup) {
      key = c.columnGroup
    }
    if (!grouped[key]) {
      grouped[key] = []
    }
    grouped[key].push(c)
    return grouped
  }, {})
  return (
    <GridContainer
      alignItems={alignItems}
      customClasses={customClasses}
      id={id}
      real_id={real_id}
      name={name}
      layout={layout}
      style={style}
    >
      {Object.values(groupedContent).map((group, i) => {
        return (
          <GridCol
            extraLargeColumnWidth={group[0].extraLargeColumnWidth}
            extraLargeColumnOffset={group[0].extraLargeColumnOffset}
            extraSmallColumnWidth={group[0].extraSmallColumnWidth}
            extraSmallColumnOffset={group[0].extraSmallColumnOffset}
            largeColumnWidth={group[0].columnWidth}
            largeColumnOffset={group[0].columnOffset}
            mediumColumnWidth={group[0].mediumColumnWidth}
            mediumColumnOffset={group[0].mediumColumnOffset}
            smallColumnWidth={group[0].smallColumnWidth}
            smallColumnOffset={group[0].smallColumnOffset}
            key={i}
          >
            {group.map((content, indexKey) => (
              <GridComponentRenderer key={indexKey} {...content} />
            ))}
          </GridCol>
        )
      })}
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
