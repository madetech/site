import React from 'react'

export default function ContentfulInlineImages({
  caption,
  constrainImageHeight,
  id,
  images,
  largeColumnWidth,
  largeColumnOffset,
  overlay,
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

  if (caption)
    captionComponent = <p className="inline-images__caption">{caption}</p>

  return (
    <div className={`inline-images ${overlay}`} id={id}>
      <div className="container">
        <div className="row">
          <div
            className={`col-lg-${largeColumnWidth} offset-lg-${largeColumnOffset}`}
          >
            {captionComponent}

            <div className="d-flex">{imageComponents}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
