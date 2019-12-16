import React from 'react'

export default function ContentfulImageLink({ html, id, image }) {
  const imageComponent = (
    <div className="mx-1 mx-md-3">
      <img alt={image.title} className="mw-100" src={image.fixed.src} />
    </div>
  )

  return (
    <div className="imageLink" id={id}>
      <div className="container">
        <div className="row">
          <div>
            <div className="d-flex justify-content-between">
              {imageComponent}
            </div>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </div>
    </div>
  )
}
