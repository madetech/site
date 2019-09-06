import React from 'react'
import threeSpaceToLineBreak from '../../helpers/threeSpaceToLineBreak'

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

  if (pageBreadcrumb) {
    pageBreadcrumbComponent = (
      <div className="contentful-hero__breadcrumb">{pageBreadcrumb}</div>
    )
  }

  if (sectionName) {
    sectionNameComponent = (
      <div className="contentful-hero__section-type">{sectionName}</div>
    )
  }

  if (image) {
    backgroundImage = `url(${image.fixed.src})`
  }

  return (
    <div className="contentful-hero" id={id}>
      <div className="container">
        <div className="row" style={{ backgroundImage: backgroundImage }}>
          <div className="col-lg-12">
            {pageBreadcrumbComponent}
            {sectionNameComponent}
            <h1 className="contentful-hero__page-title">
              {threeSpaceToLineBreak(pageTitle)}
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}
