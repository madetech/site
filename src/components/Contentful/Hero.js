import React, { Fragment } from 'react'
import threeSpaceToLineBreak from '../../helpers/threeSpaceToLineBreak'
import threeHyphenToSoftHyphen from '../../helpers/threeHyphenToSoftHyphen'
import { Hero } from '@madetech/frontend'

export default function ContentfulHero({
  id,
  pageBreadcrumb,
  pageTitle,
  headerText,
  headerImage,
  textColour,
  textSize,
  backgroundColour,
  headerLinks,
}) {
  let pageBreadcrumbComponent
  let textColourStyle
  let textSizeStyle
  let headerTextComponent
  let links

  let backgroundColourStyle

  if (pageBreadcrumb && pageBreadcrumb.links) {
    pageBreadcrumbComponent = renderBreadcrumb(pageBreadcrumb.links)
  }

  if (headerText) {
    headerTextComponent = (
      <div className="contentful-hero__text">{headerText}</div>
    )
  }

  if (headerLinks) {
    links = list()
  }

  function list() {
    headerLinks.forEach(link => {
      link.reference = '#'
      if (link.slug) {
        link.reference = 'https://www.madetech.com' + link.slug
      } else {
        link.reference = '#' + link.id
      }
    })
    return (
      <div className="contentful-hero__header-links">
        <p className="contentful-hero__header-links__title ">
          {' '}
          Jump straight to:
        </p>
        {headerLinks.map((link, index) => (
          <a className="contentful-hero__links__a" href={link.reference}>
            {link.linkTitle} <br></br>
          </a>
        ))}
      </div>
    )
  }

  textColourStyle = textColour || ''
  textSizeStyle = textSize || ''
  backgroundColourStyle = backgroundColour || ''

  let parsedTitle = threeSpaceToLineBreak(pageTitle)
  parsedTitle = threeHyphenToSoftHyphen(parsedTitle)

  return (
    <div className={`contentful-hero ${backgroundColourStyle}`} id={id}>
      <Hero backgroundColour={backgroundColourStyle}>hi</Hero>
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
