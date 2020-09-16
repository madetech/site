import React from 'react'
import { Prose } from '@madetech/frontend'
import HubSpotForm from './HubSpotForm'
import ImageLink from './ImageLink'
import documentToHtmlString from '../../helpers/documentToHtmlString'
import toHtmlId from '../../helpers/toHtmlId'
import JobsBoard from '../JobsBoard'
import threeSpaceToLineBreak from '../../helpers/threeSpaceToLineBreak'
import threeHyphenToSoftHyphen from '../../helpers/threeHyphenToSoftHyphen'
import Tweet from './Tweet'
import EbookPreview from './EbookPreview'
import DripForm from './DripForm'

function GridProse({
  customClasses,
  image,
  imageUrl,
  imageStyle,
  html,
  screenReaderText,
  style,
  textAlign,
  overlay,
}) {
  let className = 'contentful-prose'
  if (textAlign) className += ` text-${textAlign}`
  if (style) className += ` ${style}`
  if (overlay) className += ` ${overlay}`
  if (customClasses) {
    customClasses.forEach(c => (className += ` ${c}`))
  }

  if (screenReaderText) {
    className += ' screen-reader'
  }

  let imageComponent
  if (image && image.fixed) {
    let imageClassName = imageStyle || ''

    // gatsbys fixed image width is giving us image quality problems.
    // removing the specified width sorts this out
    // need to investigate further...
    let imageSrc = image.fixed.src.split('?')[0]

    imageComponent = (
      <img alt={image.title} className={imageClassName} src={imageSrc} />
    )
  }

  if (imageUrl) {
    imageComponent = (
      <a href={imageUrl} target="_blank" rel="noopener noreferrer">
        {imageComponent}
      </a>
    )
  }

  let parsedHtml = threeSpaceToLineBreak(html, true)
  parsedHtml = threeHyphenToSoftHyphen(parsedHtml, true)

  let proseComponent
  if (html) {
    proseComponent = (
      <Prose>
        <div dangerouslySetInnerHTML={{ __html: parsedHtml }} className="prose-heading" />
      </Prose>
    )
  }

  let gridProseComponent
  if (imageStyle === 'after') {
    gridProseComponent = (
      <div className={className}>
        {proseComponent}
        {imageComponent}
      </div>
    )
  } else {
    gridProseComponent = (
      <div className={className}>
        {imageComponent}
        {proseComponent}
      </div>
    )
  }

  return gridProseComponent
}

function GridCard({ image, html, link }) {
  let cardContentComponent

  if (image && image.fixed) {
    cardContentComponent = (
      <>
        <div style={{ width: '35%' }}>
          <img alt={image.title} className="mw-100" src={image.fixed.src} />
        </div>

        <div style={{ width: '60%' }}>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </>
    )
  } else {
    cardContentComponent = <div dangerouslySetInnerHTML={{ __html: html }} />
  }

  return (
    <div className="contentful-card">
      <a href={link} className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            {cardContentComponent}
          </div>
        </div>
      </a>
    </div>
  )
}

function GridHubSpotForm({ formId, id, buttonColour }) {
  return <HubSpotForm formId={formId} id={id} buttonColour={buttonColour} />
}

function GridTweet({ tweetId }) {
  return <Tweet tweetId={tweetId}></Tweet>
}

function GridDripForm({
  dripFormId,
  headline,
  formDescription,
  formFields,
  formTags,
}) {
  return (
    <DripForm
      dripFormId={dripFormId}
      headline={headline}
      formDescription={formDescription}
      formFields={formFields}
      formTags={formTags}
    />
  )
}

function GridUnknownComponentError({ __typename }) {
  return <div>Unknown Content Type for Grid: {__typename}</div>
}

function GridImageLink({ url, image, linkText }) {
  return <ImageLink url={url} image={image} linkText={linkText} />
}

function GridBlogWrapper({
  alignItems,
  content,
  customClasses,
  id,
  layout,
  style,
}) {
  return (
    <EbookPreview
      alignItems={alignItems}
      content={content}
      customClasses={customClasses}
      id={id}
      layout={layout}
      style={style}
    />
  )
}

export default function GridComponentRenderer(content) {
  switch (content.__typename) {
    case 'ContentfulProse':
      return (
        <GridProse
          columnGroup={content.columnGroup}
          customClasses={content.customClasses}
          image={content.image}
          imageUrl={content.imageUrl}
          imageStyle={content.imageStyle}
          html={documentToHtmlString(content.body && content.body.json)}
          screenReaderText={content.screenReaderText}
          style={content.style}
          textAlign={content.textAlign}
          overlay={content.overlay}
        />
      )
    case 'ContentfulCard':
      return (
        <GridCard
          image={content.image}
          html={documentToHtmlString(content.body && content.body.json)}
          link={content.link}
        />
      )
    case 'ContentfulHubSpotForm':
      return (
        <GridHubSpotForm
          formId={content.formId}
          id={toHtmlId(content.name)}
          buttonColour={content.buttonColour}
        />
      )
    case 'ContentfulJobsBoard':
      return <JobsBoard />
    case 'ContentfulTweet':
      return <GridTweet tweetId={content.tweetId} />
    case 'ContentfulImageLink':
      return (
        <GridImageLink
          url={content.url}
          image={content.image}
          linkText={content.linkText}
        />
      )
    case 'ContentfulBlogWrapper':
      return (
        <GridBlogWrapper
          alignItems={content.alignItems}
          content={content.content}
          customClasses={content.customClasses}
          id={content.id}
          layout={content.layout}
          style={content.style}
        />
      )
    case 'ContentfulDripForm':
      return (
        <GridDripForm
          dripFormId={content.dripFormId}
          headline={content.headline}
          formDescription={content.formDescription}
          formFields={content.formFields}
          formTags={content.formTags}
        />
      )
    default:
      return <GridUnknownComponentError __typename={content.__typename} />
  }
}
