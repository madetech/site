import React from 'react'

export default function ContentfulHero({ pageTitle, sectionName, id, image }) {
  let sectionNameComponent
  let imageComponent

  if (sectionName)
    sectionNameComponent = <p className="section-name">{sectionName}</p>

  if (image) imageComponent = <img alt={image.title} src={image.fixed.src} />

  return (
    <div className="contentful-hero" id={id}>
      <div className="container">
        <div className="row">
          <p className="breadcrumb">Home/our services/blah blah</p>
        </div>
        <div className="row">
          {sectionNameComponent}
          <h1>{pageTitle}</h1>
          {imageComponent}
        </div>
      </div>
    </div>
  )
}
