import React from 'react'
import { Jumbotron } from '@madetech/frontend'

export default function ContentfulJumbotron({
  backgroundUrl,
  html,
  id,
  entry_id,
  largeColumnWidth,
  largeColumnOffset,
  textAlign,
  textColor,
}) {
  let className = 'contentful-jumbotron'

  if (backgroundUrl) className += ` with-background`
  if (textColor === 'black') className += ` with-black-text`
  if (textAlign) className += ` text-${textAlign}`

  return (
    <div className={className} id={id}>
      <Jumbotron backgroundUrl={backgroundUrl}>
        <div className="container">
          <a id={entry_id}></a>
          <div className="row">
            <div
              className={`col-lg-${largeColumnWidth} offset-lg-${largeColumnOffset}`}
            >
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
          </div>
        </div>
      </Jumbotron>
    </div>
  )
}
