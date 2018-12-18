import React from 'react'

function PostTag ({ name, slug }) {
  return (
    <span className='post_tags__tag'>
      <a href={`/blog/t/${slug}`}>{name}</a>
    </span>
  )
}

export default function PostTags ({ tags }) {
  return (
    <span className='post_tags'>
      {tags.map((tag, i) => <PostTag key={i} name={tag.name} slug={tag.slug} />)}
    </span>
  )
}
