import React from 'react'
import Grid from './Grid'
import InlineImages from './InlineImages'
import Jumbotron from './Jumbotron'
import Prose from './Prose'

function renderContent (content, i) {
  const id = content.name.toLowerCase().replace(/\s/g, '').replace('>', '-')

  switch (content.__typename) {
  case 'ContentfulInlineImages':
    return (
      <InlineImages
        caption={content.caption}
        columnWidth={content.columnWidth}
        columnOffset={content.columnOffset}
        constrainImageHeight={content.constrainImageHeight}
        id={id}
        key={i}
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
        id={id}
        key={i}
        textAlign={content.textAlign}
        />
    )
  case 'ContentfulProse':
    return (
      <Prose
        columnWidth={content.columnWidth}
        columnOffset={content.columnOffset}
        html={content.childContentfulProseBodyRichTextNode.childContentfulRichText.html}
        id={id}
        key={i}
        textAlign={content.textAlign}
        />
    )
  case 'ContentfulGrid':
    return (
      <Grid
         alignItems={content.alignItems}
         content={content.content}
         id={id}
         key={i}
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
