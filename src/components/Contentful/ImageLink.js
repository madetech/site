import React from 'react'
import threeSpaceToLineBreak from '../../helpers/threeSpaceToLineBreak'
import threeHyphenToSoftHyphen from '../../helpers/threeHyphenToSoftHyphen'

export default function ContentfulImageLink({ id, url, image, linkText }) {
  const imageComponent = (
    <img alt={image.title} className="mw-100" src={image.fixed.src} />
  )

  let text = threeSpaceToLineBreak(linkText)
  text = threeHyphenToSoftHyphen(text)

  return (
    <div className="contentful-imagelink" id={id}>
      <a href={`${url}`}>
        {imageComponent}
        <br />
        {text}
      </a>
    </div>
  )
}
