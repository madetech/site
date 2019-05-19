import React from 'react'

export default function ContentfulInlineImages({
  caption,
  columnWidth,
  columnOffset,
  constrainImageHeight,
  id,
  images,
}) {
  const imageComponents = images.map((image, i) => {
    return (
      <div className="mx-1 mx-md-3" key={i}>
        <img
          alt={image.title}
          className="mw-100"
          style={{ maxHeight: constrainImageHeight }}
          src={image.fixed.src}
        />
      </div>
    )
  })

  let captionComponent

  if (caption) captionComponent = <p className="lead text-muted">{caption}</p>

  return (
    <div className="inline-images" id={id}>
      <div className="container">
        <div className="row">
          <div className={`col-lg-${columnWidth} offset-lg-${columnOffset}`}>
            {captionComponent}

            <div className="d-flex justify-content-between">
              {imageComponents}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
