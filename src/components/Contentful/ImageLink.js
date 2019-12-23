import React from 'react'
import threeSpaceToLineBreak from '../../helpers/threeSpaceToLineBreak'
import threeHyphenToSoftHyphen from '../../helpers/threeHyphenToSoftHyphen'

export default function ContentfulImageLink({
  id,
  url,
  image,
  linkText,
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

  let text = threeSpaceToLineBreak(linkText)
  text = threeHyphenToSoftHyphen(text)

  return (
    <div className="contentful-imagelink" id={id}>
      <div className={colClasses}>
        <a href={`${url}`}>
          {imageComponent}
          <br />
          {text}
        </a>
      </div>
    </div>
  )
}
