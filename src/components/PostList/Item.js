import React from 'react'
import { Prose } from '@madetech/frontend'
import { PostMeta } from '../Post'

export default function PostListItem({ post, withPrefix }) {
  return (
    <div className="post_list_item">
      <h2>
        <a
          href={withPrefix(`/blog/${post.slug}`)}
          dangerouslySetInnerHTML={{ __html: post.title }}
        />
      </h2>

      <Prose>
        <PostMeta post={post} smaller withPrefix={withPrefix} />

        <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
      </Prose>
    </div>
  )
}
