import React from 'react'
import { withPrefix } from 'gatsby'
import { PostMeta } from '../Post'

export default function PostListItem ({ post }) {
  return (
    <div className='post_list_item'>
      <h2>
        <a href={withPrefix(`/${post.slug}`)} dangerouslySetInnerHTML={{ __html: post.title }} />
      </h2>

      <PostMeta post={post} />

      <div className='lead' dangerouslySetInnerHTML={{ __html: post.excerpt }} />
    </div>
  )
}
