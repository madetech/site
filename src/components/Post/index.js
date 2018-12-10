import React from 'react'
import PostMeta from './Meta'

export default function Post ({ post }) {
  return (
    <article className='post'>
      <h1 dangerouslySetInnerHTML={{ __html: post.title }} />

      <PostMeta post={post} />

      <div className='post__body' dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  )
}

export { PostMeta }
