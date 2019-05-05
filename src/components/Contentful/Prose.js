import React from 'react'
import { Prose } from '@madetech/frontend'

export default function ContentfulProse({
  columnWidth,
  columnOffset,
  html,
  id,
  textAlign,
}) {
  let className = 'contentful-prose'
  if (textAlign) className += ` text-${textAlign}`

  return (
    <div className={className} id={id}>
      <Prose>
        <div className="container">
          <div className="row">
            <div
              className={`col-lg-${columnWidth} offset-lg-${columnOffset} px-4`}
            >
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
          </div>
        </div>
      </Prose>
    </div>
  )
}
