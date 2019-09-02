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
    if (sectionName)
      pageBreadcrumbComponent = (
        <p className="contentful-hero__breadcrumb">{pageBreadcrumb}</p>
      )
  }

  {
    if (pageBreadcrumb)
      sectionNameComponent = (
        <p className="contentful-hero__section-name">{sectionName}</p>
      )
  }

  {
    if (image)
      imageComponent = (
        <img
          className="contentful-hero__services-image"
          alt={image.title}
          src={image.fixed.src}
        />
      )
  }

  return (
    <div className="contentful-hero" id={id}>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <p> {pageBreadcrumbComponent}</p>
            <div>{sectionNameComponent}</div>
            <h1 className="contentful-hero__page-title">{pageTitle}</h1>
          </div>
          <div className="col-7">{imageComponent}</div>
        </div>
      </div>
    </div>
  )
}
