import React from 'react'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import HubSpotForm from './HubSpotForm'
import Grid from './Grid'
import InlineImages from './InlineImages'
import Jumbotron from './Jumbotron'
import Prose from './Prose'

function renderContent(content, i) {
  const id = content.name.toLowerCase().replace(/[^a-z]+/g, '-')

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
          html={documentToHtmlString(content.body.json)}
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
          html={documentToHtmlString(content.body.json)}
          id={id}
          key={i}
          textAlign={content.textAlign}
        />
      )
    case 'ContentfulHubSpotForm':
      return <HubSpotForm formId={content.formId} id={id} key={i} />
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
      return <div>Unknown Content Type: {content.__typename}</div>
  }
}

function withErrorHandling(renderContent) {
  return function(content, i) {
    try {
      return renderContent(content, i)
    } catch (e) {
      console.error(e)
      return <div>Render Content Error</div>
    }
  }
}

export default function Contentful({ content }) {
  return content.map(withErrorHandling(renderContent))
}
