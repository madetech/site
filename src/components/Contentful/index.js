import React from 'react'
import { Jumbotron, Prose } from '@madetech/frontend'
import InlineImages from './InlineImages'

function renderContent (content, i) {
  switch (content.__typename) {
  case 'ContentfulInlineImages':
    return <InlineImages caption={content.caption} images={content.images} />
  case 'ContentfulJumbotron':
    const jumbotronHtml = content.childContentfulJumbotronBodyRichTextNode.childContentfulRichText.html
    let backgroundUrl

    if (content.background) backgroundUrl = content.background.fixed.src

    return (
      <Jumbotron backgroundUrl={backgroundUrl} key={i}>
        <div className='container'>
          <div className='row'>
            <div className={`col-lg-${content.columnWidth} offset-lg-${content.columnOffset} px-4 py-5`}>
              <div className='lead' dangerouslySetInnerHTML={{ __html: jumbotronHtml }} />
            </div>
          </div>
        </div>
      </Jumbotron>
    )
  case 'ContentfulProse':
    const proseHtml = content.childContentfulProseBodyRichTextNode.childContentfulRichText.html

    return (
      <div className='py-5' key={i}>
        <Prose>
          <div className='container'>
            <div className='row'>
              <div className={`col-lg-${content.columnWidth} offset-lg-${content.columnOffset} px-4`}>
                <div dangerouslySetInnerHTML={{ __html: proseHtml }} />
              </div>
            </div>
          </div>
        </Prose>
      </div>
    )
  case 'ContentfulGrid':
    const contentComponents = content.content.map((content, i) => {
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
      <div className={`mt-5 ${content.style || ''}`} key={i}>
        <div className='container'>
          <div className='row'>
            {contentComponents}
          </div>
        </div>
      </div>
    )
  default:
    return null
  }
}

export default function Contentful ({ content }) {
  return page.content.map(renderContent)
}
