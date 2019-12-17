import React from 'react'

export default function ContentfulImageLink({
  html,
  id,
  image,
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
  let colClasses = 'px4'

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

  const imageComponent = (
    <img alt={image.title} className="mw-100" src={image.fixed.src} />
  )

  return (
    <div className="contentful-imagelink" id={id}>
      <div className="container">
        <div className={colClasses}>
          {imageComponent}
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </div>
  )
}
