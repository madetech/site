import React from 'react'
import { Prose } from '@madetech/frontend'

export default function ContentfulProse({
  customClasses,
  extraLargeColumnWidth,
  extraLargeColumnOffset,
  extraSmallColumnWidth,
  extraSmallColumnOffset,
  html,
  id,
  largeColumnWidth,
  largeColumnOffset,
  mediumColumnWidth,
  mediumColumnOffset,
  screenReaderText,
  smallColumnWidth,
  smallColumnOffset,
  textAlign,
  overlay,
}) {
  let proseClassName = 'contentful-prose'
  if (textAlign) proseClassName += ` text-${textAlign}`
  if (overlay) proseClassName += ` ${overlay}`
  if (customClasses) {
    customClasses.forEach(c => (proseClassName += ` ${c}`))
  }

  if (screenReaderText) {
    proseClassName += ' screen-reader'
  }

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

  return (
    <div className={proseClassName} data-test={'prose'} id={id}>
      <Prose>
        <div className="container">
          <div className="row">
            <div className={`${colClasses}`}>
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
          </div>
        </div>
      </Prose>
    </div>
  )
}
