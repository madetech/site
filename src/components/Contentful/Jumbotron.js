import React from 'react'
import { Jumbotron } from '@madetech/frontend'

export default function ContentfulJumbotron ({ backgroundUrl, columnWidth, columnOffset, html }) {
  return (
    <div className='contentful-jumbotron'>
      <Jumbotron backgroundUrl={backgroundUrl}>
        <div className='container'>
          <div className='row'>
            <div className={`col-lg-${columnWidth} offset-lg-${columnOffset}`}>
              <div className='lead' dangerouslySetInnerHTML={{ __html: html }} />
            </div>
          </div>
        </div>
      </Jumbotron>
    </div>
  )
}
