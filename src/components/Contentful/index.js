import React from 'react'
import Grid from './Grid'
import InlineImages from './InlineImages'
import Jumbotron from './Jumbotron'
import Hero from './Hero'
import Prose from './Prose'
import Highlight from './Highlight'
import HeaderImages from './HeaderImages'
import ImageLink from './ImageLink'
import toHtmlId from '../../helpers/toHtmlId'
import documentToHtmlString from '../../helpers/documentToHtmlString'

function ComponentRenderer(content) {
  if (!content.name) throw new Error('No component name provided')
  if (!content.__typename) throw new Error('No component __typename provided')

  const id = toHtmlId(content.name)

  switch (content.__typename) {
    case 'ContentfulInlineImages':
      return (
        <InlineImages
          caption={content.caption}
          largeColumnWidth={content.columnWidth}
          largeColumnOffset={content.columnOffset}
          constrainImageHeight={content.constrainImageHeight}
          id={id}
          images={content.images}
        />
      )
    case 'ContentfulJumbotron':
      return (
        <Jumbotron
          backgroundUrl={content.background && content.background.fixed.src}
          largeColumnWidth={content.columnWidth}
          largeColumnOffset={content.columnOffset}
          html={documentToHtmlString(content.body && content.body.json)}
          id={id}
          entry_id={content.id}
          textAlign={content.textAlign}
          textColor={content.textColor}
        />
      )
    case 'ContentfulHero':
      return (
        <Hero
          id={id}
          image={content.image}
          pageBreadcrumb={content.pageBreadcrumb}
          pageTitle={content.pageTitle}
          headerText={content.headerText}
          headerImage={content.headerImage}
          textColour={content.textColour}
          textSize={content.textSize}
          backgroundColour={content.backgroundColour}
          headerLinks={content.headerLinks}
        />
      )
    case 'ContentfulProse':
      return (
        <Prose
          customClasses={content.customClasses}
          extraLargeColumnWidth={content.extraLargeColumnWidth}
          extraLargeColumnOffset={content.extraLargeColumnOffset}
          extraSmallColumnWidth={content.extraSmallColumnWidth}
          extraSmallColumnOffset={content.extraSmallColumnOffset}
          html={documentToHtmlString(content.body && content.body.json)}
          id={id}
          largeColumnWidth={content.columnWidth}
          largeColumnOffset={content.columnOffset}
          mediumColumnWidth={content.mediumColumnWidth}
          mediumColumnOffset={content.mediumColumnOffset}
          screenReaderText={content.screenReaderText}
          smallColumnWidth={content.smallColumnWidth}
          smallColumnOffset={content.smallColumnOffset}
          textAlign={content.textAlign}
        />
      )
    case 'ContentfulGrid':
      return (
        <Grid
          alignItems={content.alignItems}
          content={content.content}
          customClasses={content.customClasses}
          id={id}
          entry_id={content.id}
          name={content.name}
          layout={content.layout}
          style={content.style}
        />
      )
    case 'ContentfulImageLink':
      return (
        <ImageLink
          id={id}
          url={content.url}
          image={content.image}
          linkText={content.linkText}
        />
      )
    case 'ContentfulHighlight':
      return (
        <Highlight
          author={content.author}
          authorAvatar={content.authorAvatar}
          entry_id={content.id}
          colourOfElementAbove={content.colourOfElementAbove}
          colourOfElementBelow={content.colourOfElementBelow}
          extraLargeColumnWidth={content.extraLargeColumnWidth}
          extraSmallColumnWidth={content.extraSmallColumnWidth}
          html={documentToHtmlString(content.body && content.body.json)}
          largeColumnWidth={content.largeColumnWidth}
          mediumColumnWidth={content.mediumColumnWidth}
          smallColumnWidth={content.smallColumnWidth}
          style={content.style}
          textAlign={content.textAlign}
        />
      )
    case 'ContentfulHeaderImages':
      return (
        <HeaderImages
          id={id}
          extraLarge={content.extraLarge}
          large={content.large}
          medium={content.medium}
          small={content.small}
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

  componentDidCatch(error, info) {
    console.error(error)
  }

  render() {
    if (this.state.hasRenderContentError) {
      return <div>Render Content Error</div>
    }

    return <ComponentArrayRenderer {...this.props} />
  }
}
