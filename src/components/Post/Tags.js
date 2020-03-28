import React from 'react'

function PostTag({ name, slug, withPrefix }) {
  return (
    <span className="post_tags__tag">
      <a href={withPrefix(`/blog/t/${slug}`)}>{name}</a>
    </span>
  )
}

export default function PostTags({
  extraClassName,
  tags,
  smaller,
  withPrefix,
}) {
  let className = 'post_tags'

  if (smaller) className += '--smaller'
  if (extraClassName) className += ` ${extraClassName}`

  return (
    <span className={className}>
      {tags.map((tag, i) => (
        <PostTag
          key={i}
          name={tag.name}
          slug={tag.slug}
          withPrefix={withPrefix}
        />
      ))}
    </span>
  )
}
