import React from 'react'
import { Prose } from '@madetech/frontend'

export default function ContentfulProse ({ columnWidth, columnOffset, html }) {
  return (
    <div className='contentful-prose'>
      <Prose>
        <div className='container'>
          <div className='row'>
            <div className={`col-lg-${columnWidth} offset-lg-${columnOffset} px-4`}>
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
          </div>
        </div>
      </Prose>
    </div>
  )
}
