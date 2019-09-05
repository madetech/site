import React from 'react'
import { Prose } from '@madetech/frontend'
import documentToHtmlString from '../../helpers/documentToHtmlString'

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

export default function ContentfulFloatingProseContainer({
  colourOfElementAbove,
  colourOfElementBelow,
  content,
  gridWidth,
  style,
}) {
  const theGridWidth = gridWidth || 12
  const leftBackgroundWidth = ((gridWidth / 12) * 100) / 2
  const rightBackgroundWidth = 100 - leftBackgroundWidth

  const containerClassName = `contentful-floating-prose-container ${style ||
    ''}`
  const topSpacingClassName = `contentful-floating-prose-container__bg-right__top ${colourOfElementAbove ||
    ''}`
  const bottomSpacingClassName = `contentful-floating-prose-container__bg-right__bottom ${colourOfElementBelow ||
    ''}`
  const contentClassName = `col-${theGridWidth} contentful-floating-prose-container__content`

  let proseContent
  let columnClass
  if (content && content.length > 0) {
    const prose = content[0]
    proseContent = GridProse({
      image: prose.image,
      imageStyle: prose.imageStyle,
      html: documentToHtmlString(prose.body && prose.body.json),
      textAlign: prose.textAlign,
    })
    if (prose.columnWidth) {
      columnClass = `col-lg-${prose.columnWidth}`
    }

    if (prose.columnOffset) {
      columnClass += ` offset-lg-${prose.columnOffset}`
    }
  }

  return (
    <div className={containerClassName}>
      <div
        className="contentful-floating-prose-container__bg-left"
        style={{ width: `${leftBackgroundWidth}%` }}
      />
      <div
        className="contentful-floating-prose-container__bg-right"
        style={{ width: `${rightBackgroundWidth}%` }}
      >
        <div className={topSpacingClassName} />
        <div className={bottomSpacingClassName} />
      </div>
      <div className="container">
        <div className="row">
          <div className={columnClass}>
            <div className={contentClassName}>{proseContent}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
