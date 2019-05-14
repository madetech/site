import React from 'react'
import documentToHtmlString from '../../helpers/documentToHtmlString'
import Grid from './Grid'
import InlineImages from './InlineImages'
import Jumbotron from './Jumbotron'
import Prose from './Prose'
import toHtmlId from '../../helpers/toHtmlId'

function ComponentRenderer(content) {
  if (!content.name) throw new Error('No component name provided')
  if (!content.__typename) throw new Error('No component __typename provided')

  const id = toHtmlId(content.name)

  switch (content.__typename) {
    case 'ContentfulInlineImages':
      return (
        <InlineImages
          caption={content.caption}
          columnWidth={content.columnWidth}
          columnOffset={content.columnOffset}
          constrainImageHeight={content.constrainImageHeight}
          id={id}
          images={content.images}
        />
      )
    case 'ContentfulJumbotron':
      return (
        <Jumbotron
          backgroundUrl={content.background && content.background.fixed.src}
          columnWidth={content.columnWidth}
          columnOffset={content.columnOffset}
          html={documentToHtmlString(content.body && content.body.json)}
          id={id}
          textAlign={content.textAlign}
        />
      )
    case 'ContentfulProse':
      return (
        <Prose
          columnWidth={content.columnWidth}
          columnOffset={content.columnOffset}
          html={documentToHtmlString(content.body && content.body.json)}
          id={id}
          textAlign={content.textAlign}
        />
      )
    case 'ContentfulGrid':
      return (
        <Grid
          alignItems={content.alignItems}
          content={content.content}
          id={id}
          style={content.style}
        />
      )
    default:
      return <div>Unknown Content Type: {content.__typename}</div>
  }
}

function ComponentArrayRenderer({ content }) {
  if (!content || content.length === 0) {
    throw new Error('No content provided')
  }

  return content.map((content, i) => <ComponentRenderer key={i} {...content} />)
}

export default class Contentful extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasRenderContentError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasRenderContentError: true }
  }

  componentDidCatch (error, info) {
    console.error(error)
  }

  render () {
    if (this.state.hasRenderContentError) {
      return <div>Render Content Error</div>
    }

    return <ComponentArrayRenderer {...this.props} />
  }
}
