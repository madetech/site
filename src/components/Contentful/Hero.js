import React from 'react'

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
        <div className="contentful-hero__breadcrumb">{pageBreadcrumb}</div>
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
        <div className="contentful-hero__services-image">
          <img alt={image.title} src={image.fixed.src} />
        </div>
      )
  }

  return (
    <div className="contentful-hero" id={id}>
      <div className="container">
        <div className="row">
          <div>
            {pageBreadcrumbComponent}
            {sectionNameComponent}
            <h1 className="contentful-hero__page-title">{pageTitle}</h1>
          </div>
          {imageComponent}
        </div>
      </div>
    </div>
  )
}
