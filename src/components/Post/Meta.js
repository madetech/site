import React from 'react'
import PostTags from './Tags'

export default function PostMeta({ post, smaller, withPrefix }) {
  const className = smaller ? 'post_meta--smaller' : 'post_meta'

  return (
    <div className={className}>
      <span className="post_meta__avatar">
        <img src={post.author.avatar_urls.wordpress_96} alt="avatar" />
      </span>

      <span className="post_meta__text">
        By {post.author.name} on {post.date}
        <br />
        <span className="d-block d-md-inline">
          <PostTags
            tags={post.categories}
            smaller={smaller}
            withPrefix={withPrefix}
          />
        </span>
      </span>
    </div>
  )
}
