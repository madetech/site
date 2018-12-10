import React from 'react'
import PostAboutAuthor from './AboutAuthor'
import PostMeta from './Meta'

export default function Post ({ post }) {
  return (
    <article className='post'>
      <h1 dangerouslySetInnerHTML={{ __html: post.title }} />

      <PostMeta post={post} />

      <div className='post__body' dangerouslySetInnerHTML={{ __html: post.content }} />

      <PostAboutAuthor author={post.author} />
    </article>
  )
}

export { PostMeta }
