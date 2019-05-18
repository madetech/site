import React from 'react'
import { withPrefix } from 'gatsby'

function PostTag({ name, slug }) {
  return (
    <span className="post_tags__tag">
      <a href={withPrefix(`/blog/t/${slug}`)}>{name}</a>
    </span>
  )
}

export default function PostTags({ extraClassName, tags, smaller }) {
  let className = 'post_tags'

  if (smaller) className += '--smaller'
  if (extraClassName) className += ` ${extraClassName}`

  return (
    <span className={className}>
      {tags.map((tag, i) => (
        <PostTag key={i} name={tag.name} slug={tag.slug} />
      ))}
    </span>
  )
}
