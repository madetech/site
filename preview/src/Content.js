import React from 'react'
import Contentful from './gatsby/components/Contentful'
import Post from './gatsby/components/Post'

export default ({ page }) => {
  switch (page.__previewType) {
    case 'wordpress':
      return <Post post={page.content} withPrefix={() => '#'} />
    case 'contentful':
    default:
      return <Contentful content={page.content} />
  }
}
