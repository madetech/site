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
  let imageComponent
  let pageBreadcrumbComponent

  {
    if (pageBreadcrumb)
      pageBreadcrumbComponent = (
        <div className="row">
          <div className="col-12">
            <div className="contentful-hero__breadcrumb">{pageBreadcrumb}</div>
          </div>
        </div>
      )
  }

  {
    if (sectionName)
      sectionNameComponent = (
        <div className="contentful-hero__section-type">{sectionName}</div>
      )
  }

  {
    if (image)
      imageComponent = (
        <div className="col-1">
          <div className="contentful-hero__services-image">
            <img alt={image.title} src={image.fixed.src} />
          </div>
        </div>
      )
  }

  return (
    <div className="contentful-hero" id={id}>
      <div className="container">
        {pageBreadcrumbComponent}
        <div className="row">
          <div className="col-7">
            {sectionNameComponent}
            <h1 className="contentful-hero__page-title">{threeSpaceToLineBreak(pageTitle)}</h1>
          </div>
          {imageComponent}
        </div> 
      </div>
    </div>
  )
}
