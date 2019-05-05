import React from 'react'
import { withPrefix } from 'gatsby'
import { Prose } from '@madetech/frontend'
import { PostMeta } from '../Post'

export default function PostListItem({ post }) {
  return (
    <div className="post_list_item">
      <h2>
        <a
          href={withPrefix(`/blog/${post.slug}`)}
          dangerouslySetInnerHTML={{ __html: post.title }}
        />
      </h2>

      <Prose>
        <PostMeta post={post} />

        <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
      </Prose>
    </div>
  )
}
