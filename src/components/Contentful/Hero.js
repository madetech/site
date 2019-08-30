import React from 'react'
import { Hero } from '@madetech/frontend'

export default function ContentfulHero({ name, id }) {
  let className = 'contentful-hero'

  return (
    <div className={className} id={id}>
      <Hero>
        <div>{name}</div>
      </Hero>
    </div>
  )
}
