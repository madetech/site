import React from 'react'
import Grid from './Grid'
import InlineImages from './InlineImages'
import Jumbotron from './Jumbotron'
import Prose from './Prose'

function renderContent (content, i) {
  switch (content.__typename) {
  case 'ContentfulInlineImages':
    return (
      <InlineImages
        caption={content.caption}
        images={content.images}
        key={i}
        />
    )
  case 'ContentfulJumbotron':
    return (
      <Jumbotron
        backgroundUrl={content.background && content.background.fixed.src}
        columnWidth={content.columnWidth}
        columnOffset={content.columnOffset}
        key={i}
        html={content.childContentfulJumbotronBodyRichTextNode.childContentfulRichText.html}
        />
    )
  case 'ContentfulProse':
    return (
      <Prose
        columnWidth={content.columnWidth}
        columnOffset={content.columnOffset}
        key={i}
        html={content.childContentfulProseBodyRichTextNode.childContentfulRichText.html}
        />
    )
  case 'ContentfulGrid':
    return (
      <Grid
         key={i}
         content={content.content}
         style={content.style}
         />
    )
  default:
    return null
  }
}

export default function Contentful ({ content }) {
  return content.map(renderContent)
}
