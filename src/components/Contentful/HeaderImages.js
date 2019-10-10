import React from 'react'

export default function ContentfulHeaderImages({
  extraLarge,
  large,
  medium,
  small,
}) {
  const className = 'contentful-header-image'

  return (
    <div className={className}>
      <img
        className={`${className}__extraLarge`}
        src={extraLarge.fixed.src}
        alt=""
      />
      <img className={`${className}__large`} src={large.fixed.src} alt="" />
      <img className={`${className}__medium`} src={medium.fixed.src} alt="" />
      <img className={`${className}__small`} src={small.fixed.src} alt="" />
    </div>
  )
}
