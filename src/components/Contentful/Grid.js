import React from 'react'
import { Prose } from '@madetech/frontend'

export default function Grid ({ content, style }) {
  const contentComponents = content.map((content, i) => {
    switch (content.__typename) {
    case 'ContentfulProse':
      const proseHtml = content.childContentfulProseBodyRichTextNode.childContentfulRichText.html

      return (
        <div className={`col-lg-${content.columnWidth} offset-lg-${content.columnOffset} px-4`} key={i}>
          <div className='contentful-prose'>
            <Prose key={i}>
              <div dangerouslySetInnerHTML={{ __html: proseHtml }} />
            </Prose>
          </div>
        </div>
      )
    case 'ContentfulCard':
      const cardHtml = content.childContentfulCardBodyRichTextNode.childContentfulRichText.html

      return (
        <div className={`col-lg-${content.columnWidth} offset-lg-${content.columnOffset} px-4`} key={i}>
          <div className='contentful-card'>
            <a href={content.link} className='card'>
              <div className='card-body'>
                <div className='d-flex justify-content-between align-items-center'>
                  <div style={{ width: '35%' }}>
                    <img
                      alt={content.image.title}
                      className='mw-100'
                      src={content.image.fixed.src}
                      />
                  </div>

                  <div style={{ width: '60%' }}>
                    <div dangerouslySetInnerHTML={{ __html: cardHtml }} />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      )
    default:
      return null
    }
  })

  let className = 'contentful-grid'
  if (style) className += ` ${style}`

  return (
    <div className={className}>
      <div className='container'>
        <div className='row'>
          {contentComponents}
        </div>
      </div>
    </div>
  )
}
