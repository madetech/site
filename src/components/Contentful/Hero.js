import React from 'react'

export default function ContentfulHero({ pageTitle, sectionName, id, image }) {
  let sectionNameComponent
  let imageComponent

  if (sectionName)
    sectionNameComponent = <p className="section-name">{sectionName}</p>

  if (image)
    imageComponent = (
      <img className="services-image" alt={image.title} src={image.fixed.src} />
    )

  return (
    <div className="contentful-hero" id={id}>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <p className="breadcrumbs">Home/our services/blah blah</p>
            <div> {sectionNameComponent}</div>
            <h1 className="page-title">{pageTitle}</h1>
          </div>
          <div className="col-7">{imageComponent}</div>
        </div>
      </div>
    </div>
  )
}
