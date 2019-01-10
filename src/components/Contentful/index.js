import React from 'react'
import Grid from './Grid'
import InlineImages from './InlineImages'
import Jumbotron from './Jumbotron'
import Prose from './Prose'

function renderContent (content) {
  switch (content.__typename) {
  case 'ContentfulInlineImages':
    return (
      <InlineImages
        caption={content.caption}
        images={content.images}
        />
    )
  case 'ContentfulJumbotron':
    return (
      <Jumbotron
        backgroundUrl={content.background && content.background.fixed.src}
        columnWidth={content.columnWidth}
        columnOffset={content.columnOffset}
        html={content.childContentfulJumbotronBodyRichTextNode.childContentfulRichText.html}
        />
    )
  case 'ContentfulProse':
    return (
      <Prose
        columnWidth={content.columnWidth}
        columnOffset={content.columnOffset}
        html={content.childContentfulProseBodyRichTextNode.childContentfulRichText.html}
        />
    )
  case 'ContentfulGrid':
    return (
      <Grid
         content={content.content}
         style={content.style}
         />
    )
  default:
    return null
  }
}

export default function Contentful ({ content }) {
  return (
    <>
      {content.map((content, i) => {
        const id = content.name.toLowerCase().replace(/\s/g, '').replace('>', '-')

        return (
          <div id={id} key={i}>
            {renderContent(content)}
          </div>
        )
      })}
    </>
  )
}
