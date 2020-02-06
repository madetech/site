import React from 'react'

export default function ContentfulHighlight({
  author,
  authorAvatar,
  colourOfElementAbove,
  colourOfElementBelow,
  extraLargeColumnWidth,
  extraSmallColumnWidth,
  entry_id,
  html,
  largeColumnWidth,
  mediumColumnWidth,
  smallColumnWidth,
  style,
  textAlign,
  highlightImage,
}) {
  let colClasses = ''

  if (extraLargeColumnWidth !== null) {
    colClasses += ` col-xl-${extraLargeColumnWidth}`
  }

  if (largeColumnWidth !== null) {
    colClasses += ` col-lg-${largeColumnWidth}`
  }

  if (mediumColumnWidth !== null) {
    colClasses += ` col-md-${mediumColumnWidth}`
  }

  if (smallColumnWidth !== null) {
    colClasses += ` col-sm-${smallColumnWidth}`
  }

  if (extraSmallColumnWidth !== null) {
    colClasses += ` col-${extraSmallColumnWidth}`
  }

  const leftBackgroundWidth = 60
  const rightBackgroundWidth = 100 - leftBackgroundWidth

  const containerClassName = `contentful-highlight ${style || ''}`
  const bgTopClassName = `contentful-highlight__bg-right__top ${colourOfElementAbove ||
    ''}`
  const bgBottomClassName = `contentful-highlight__bg-right__bottom ${colourOfElementBelow ||
    ''}`

  let contentClassName = `${colClasses} offset-xl-1 offset-lg-1 offset-md-1 offset-sm-1 offset-1 contentful-highlight__content`

  if (textAlign) contentClassName += ` text-${textAlign}`

  let authorSection
  if (author || authorAvatar) {
    authorSection = (
      <div className="contentful-highlight__author">
        {authorAvatar && authorAvatar.fixed && (
          <div className="avatar">
            <img src={authorAvatar.fixed.src} alt=""></img>
          </div>
        )}
        {author && <div className="author">{author}</div>}
      </div>
    )
  }
  return (
    <div className={containerClassName}>
      <a id={entry_id} href={`#${entry_id}`}>
        {' '}
      </a>
      <div
        className="contentful-highlight__bg-left"
        style={{ width: `${leftBackgroundWidth}%` }}
      ></div>
      <div
        className="contentful-highlight__bg-right"
        style={{ width: `${rightBackgroundWidth}%` }}
      >
        {/*<div className="highlight-image">*/}
        {/*  <img src={require('../../assets/images/highlight/stripes@2x.png')} alt=""/>*/}
        {/*</div>*/}
        <div className={bgTopClassName} />
        <div className={bgBottomClassName} />
      </div>
      <div className="container">
        <div className="row">
          <div className={contentClassName}>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            {authorSection}
          </div>
          <div className="highlight-image">
            <img
              src={require('../../assets/images/highlight/stripes@2x.png')}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}
