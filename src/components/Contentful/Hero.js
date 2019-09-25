import React, { Fragment } from 'react'
import threeSpaceToLineBreak from '../../helpers/threeSpaceToLineBreak'
import threeHyphenToSoftHyphen from '../../helpers/threeHyphenToSoftHyphen'

export default function ContentfulHero({
  id,
  pageBreadcrumb,
  pageTitle,
  sectionName,
}) {
  let sectionNameComponent
  let pageBreadcrumbComponent

  if (pageBreadcrumb && pageBreadcrumb.links) {
    pageBreadcrumbComponent = renderBreadcrumb(pageBreadcrumb.links)
  }

  if (sectionName) {
    sectionNameComponent = (
      <div className="contentful-hero__section-type">{sectionName}</div>
    )
  }

  let parsedTitle = threeSpaceToLineBreak(pageTitle)
  parsedTitle = threeHyphenToSoftHyphen(parsedTitle)

  return (
    <div className="contentful-hero" id={id}>
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
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
          <Fragment key={index}>
            <a href={link.url}>{link.title}</a>
            {index < finalLink && ' / '}
          </Fragment>
        )
      })}
    </div>
  )
}
