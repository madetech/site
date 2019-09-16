import React from 'react'

export default function ContentfulHighlight({
  colourOfElementAbove,
  colourOfElementBelow,
  gridWidth,
  html,
  style,
  textAlign,
  author,
}) {
  const theGridWidth = gridWidth || 12
  const leftBackgroundWidth = ((gridWidth / 12) * 100) / 2
  const rightBackgroundWidth = 100 - leftBackgroundWidth

  const containerClassName = `contentful-highlight ${style || ''}`
  const bgTopClassName = `contentful-highlight__bg-right__top ${colourOfElementAbove ||
    ''}`
  const bgBottomClassName = `contentful-highlight__bg-right__bottom ${colourOfElementBelow ||
    ''}`
  let contentClassName = `col-${theGridWidth} offset-lg-1 contentful-highlight__content`
  if (textAlign) contentClassName += ` text-${textAlign}`

  let authorSection
  if (author) {
    authorSection = (
      <div className="contentful-highlight__author">
        <span>{author}</span>
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
