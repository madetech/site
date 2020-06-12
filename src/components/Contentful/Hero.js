import React, { Fragment } from 'react'
import threeSpaceToLineBreak from '../../helpers/threeSpaceToLineBreak'
import threeHyphenToSoftHyphen from '../../helpers/threeHyphenToSoftHyphen'
import { Hero } from '@madetech/frontend'

export default function ContentfulHero({
  id,
  isHeader,
  pageBreadcrumb,
  pageTitle,
  body,
  headerImage,
  headerImageLayout,
  headerImageShadowColour,
  textColour,
  textSize,
  backgroundColour,
  headerLinks,
  customClasses,
}) {
  let pageBreadcrumbComponent
  let textColourStyle
  let textSizeStyle
  let headerTextComponent
  let headerImageShadowColourStyle
  let links
  let backgroundColourStyle
  let heroClassNames = ''
  let noPageBreadcrumb = ''

  if (customClasses) {
    customClasses.forEach(c => (heroClassNames += ` ${c}`))
  }

  textColourStyle = textColour || ''
  textSizeStyle = textSize || ''
  backgroundColourStyle = backgroundColour || ''

  if (pageBreadcrumb && pageBreadcrumb.links) {
    pageBreadcrumbComponent = renderBreadcrumb(pageBreadcrumb.links)
  } else {
    noPageBreadcrumb = 'no_breadcrumb'
  }

  let parsedTitle = threeSpaceToLineBreak(pageTitle)
  parsedTitle = threeHyphenToSoftHyphen(parsedTitle)

  if (body) {
    headerTextComponent = (
      <div
        className="contentful-hero__text"
        dangerouslySetInnerHTML={{ __html: body }}
      />
    )
  }

  let heroTextComponent

  function heroTextComponentMaker(bootstrapSizes) {
    return (
      <div className={`${bootstrapSizes}`}>
        <div className={`contentful-hero__text-box ${noPageBreadcrumb}`}>
          {pageBreadcrumbComponent}
          <h1
            className={`contentful-hero__page-title ${textSizeStyle} ${textColourStyle}`}
          >
            {parsedTitle}
          </h1>
          {headerTextComponent}
        </div>
      </div>
    )
  }

  if (headerImageShadowColour) {
    headerImageShadowColourStyle = headerImageShadowColour
  } else {
    headerImageShadowColourStyle = textColourStyle
  }

  let heroImageComponent

  if (headerLinks) {
    links = list()
  }

  if (headerImage) {
    if (headerImageShadowColourStyle === 'none') {
      heroImageComponent = (
        <div
          className={`col-xl-6 col-lg-6 col-md-6 d-none d-md-block contentful-hero__image hero_${headerImageShadowColourStyle}`}
        >
          <img alt={headerImage.title} src={headerImage.fixed.src} />
          {links}
        </div>
      )
    } else {
      heroImageComponent = (
        <div
          className={`col-xl-6 col-lg-6 col-md-6 d-none d-md-block contentful-hero__image hero_${headerImageShadowColourStyle}`}
          style={{
            backgroundImage:
              'url(' +
              headerImage.fixed.src +
              '), url(' +
              headerImage.resize.src +
              ')',
          }}
        >
          {links}
        </div>
      )
    }
  }

  function list() {
    let linksHeader = 'Jump straight to:'

    headerLinks.forEach(link => {
      link.reference = '#'
      if (link.slug) {
        link.reference = 'https://www.madetech.com' + link.slug
        link.linkTitle = link.name
        linksHeader = 'Go to:'
      } else {
        link.reference = '#' + link.id
      }
    })
    return (
      <div className="contentful-hero__header-links">
        <p className="contentful-hero__header-links__title "> {linksHeader}</p>
        {headerLinks.map((link, index) => (
          <a className="contentful-hero__links__a" href={link.reference}>
            {link.linkTitle}
          </a>
        ))}
      </div>
    )
  }

  let heroComponent
  let bootstrapSizes
  if (headerImageLayout === 'before') {
    bootstrapSizes =
      'col-xl-5 offset-xl-1 col-lg-5 offset-lg-1 col-md-5 offset-md-1'
    heroTextComponent = heroTextComponentMaker(bootstrapSizes)
    heroComponent = (
      <div className="row before">
        {heroImageComponent}
        {heroTextComponent}
      </div>
    )
  } else {
    if (isHeader === 'no') {
      bootstrapSizes =
        'col-xl-5 offset-xl-1 col-lg-5 offset-lg-1 col-md-5 offset-md-1'
    } else {
      bootstrapSizes = 'col-xl-6 col-lg-6 col-md-6'
    }
    heroTextComponent = heroTextComponentMaker(bootstrapSizes)
    heroComponent = (
      <div className="row">
        {heroTextComponent}
        {heroImageComponent}
      </div>
    )
  }

  return (
    <div
      className={`contentful-hero ${backgroundColourStyle} ${heroClassNames}`}
      id={id}
    >
      <Hero backgroundColour={backgroundColourStyle}>
        <div className="container">
          <div className="contentful-hero__row">{heroComponent}</div>
        </div>
      </Hero>
    </div>
  )
}

function renderBreadcrumb(links) {
  const finalLink = links.length - 1

  return (
    <div className="contentful-hero__breadcrumb">
      {links.map((link, index) => {
        return (
          <Fragment key={index}>
            <a href={link.url}>{link.title}</a>
            {index < finalLink && ' / '}
          </Fragment>
        )
      })}
    </div>
  )
}
