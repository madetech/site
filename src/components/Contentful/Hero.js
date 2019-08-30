import React from 'react'

export default function ContentfulHero({ name, id }) {
  let className = 'contentful-hero'

  return (
    <div className={className} id={id}>
      <div>{name}</div>
    </div>
  )
}
