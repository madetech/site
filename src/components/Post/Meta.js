import React from 'react'
import PostTags from './Tags'

export default function PostMeta ({ post }) {
  return (
    <div className='post_meta'>
      <span className='post_meta__avatar'>
        <img src={post.author.avatar_urls.wordpress_96} alt='avatar' />
      </span>

      <span className='post_meta__text'>
        By {post.author.name}<br />
        {post.date}
        <span className='d-none d-md-inline'> – </span>
        <span className='d-block d-md-inline'>
          <PostTags tags={post.categories} />
        </span>
      </span>
    </div>
  )
}
