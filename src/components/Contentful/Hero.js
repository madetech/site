import React from 'react'
import threeSpaceToLineBreak from '../../helpers/threeSpaceToLineBreak'
import threeHyphenToSoftHyphen from '../../helpers/threeHyphenToSoftHyphen'

export default function ContentfulHero({
  id,
  image,
  pageBreadcrumb,
  pageTitle,
  sectionName,
}) {
  let sectionNameComponent
  let pageBreadcrumbComponent
  let backgroundImage

  if (pageBreadcrumb && pageBreadcrumb.links) {
    pageBreadcrumbComponent = renderBreadcrumb(pageBreadcrumb.links)
  }

  if (sectionName) {
    sectionNameComponent = (
      <div className="contentful-hero__section-type">{sectionName}</div>
    )
  }

  if (image) {
    backgroundImage = `url(${image.fixed.src})`
  }

  let parsedTitle = threeSpaceToLineBreak(pageTitle)
  parsedTitle = threeHyphenToSoftHyphen(parsedTitle)

  return (
    <div className="contentful-hero" id={id}>
      <div className="container">
        <div className="row" style={{ backgroundImage: backgroundImage }}>
          <div className="col-lg-12">
            {pageBreadcrumbComponent}
            {sectionNameComponent}
            <h1 className="contentful-hero__page-title">{parsedTitle}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

function renderBreadcrumb(links) {
  const finalLink = links.length - 1

  return (
    <div className="contentful-hero__breadcrumb">
      {links.map((link, index) => {
        return (
          <>
            <a href={link.url} key={link.url}>
              {link.title}
            </a>
            {index < finalLink && ' / '}
          </>
        )
      })}
    </div>
  )
}
