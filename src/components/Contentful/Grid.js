import React from 'react'
import { Prose } from '@madetech/frontend'

export default function Grid ({ content, style }) {
  const contentComponents = content.map((content, i) => {
    switch (content.__typename) {
    case 'ContentfulProse':
      const proseHtml = content.childContentfulProseBodyRichTextNode.childContentfulRichText.html

      return (
        <div className={`col-lg-${content.columnWidth} offset-lg-${content.columnOffset} px-4`} key={i}>
          <Prose key={i}>
            <div dangerouslySetInnerHTML={{ __html: proseHtml }} />
          </Prose>
        </div>
      )
      default:
        return null
    }
  })

  return (
    <div className={`mt-5 ${style || ''}`}>
      <div className='container'>
        <div className='row'>
          {contentComponents}
        </div>
      </div>
    </div>
  )
}
