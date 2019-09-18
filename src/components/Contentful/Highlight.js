import React from 'react'

export default function ContentfulHighlight({
  author,
  authorAvatar,
  colourOfElementAbove,
  colourOfElementBelow,
  gridWidth,
  html,
  style,
  textAlign,
}) {
  const theGridWidth = gridWidth || 12
  const leftBackgroundWidth = ((gridWidth / 12) * 100) / 2
  const rightBackgroundWidth = 100 - leftBackgroundWidth

  const containerClassName = `contentful-highlight ${style || ''}`
  const bgTopClassName = `contentful-highlight__bg-right__top ${colourOfElementAbove ||
    ''}`
  const bgBottomClassName = `contentful-highlight__bg-right__bottom ${colourOfElementBelow ||
    ''}`

  let contentClassName = `col-lg-${theGridWidth} offset-lg-1 
  col-md-${theGridWidth} offset-md-1 
  col-sm-${theGridWidth} offset-sm-1 
  col-${theGridWidth} offset-1 
  contentful-highlight__content`

  if (textAlign) contentClassName += ` text-${textAlign}`

  let authorSection
  if (author || authorAvatar) {
    authorSection = (
      <div className="contentful-highlight__author">
        {authorAvatar && (
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
      <div
        className="contentful-highlight__bg-left"
        style={{ width: `${leftBackgroundWidth}%` }}
      />
      <div
        className="contentful-highlight__bg-right"
        style={{ width: `${rightBackgroundWidth}%` }}
      >
        <div className={bgTopClassName} />
        <div className={bgBottomClassName} />
      </div>
      <div className="container">
        <div className="row">
          <div className={contentClassName}>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            {authorSection}
          </div>
        </div>
      </div>
    </div>
  )
}
