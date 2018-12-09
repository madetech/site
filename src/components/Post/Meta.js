import React from 'react'

function PostMetaTags ({ tags }) {
  return tags.map((tag, i) => {
    return (
      <span className='post_meta__tag'>
        <a href={tag.name} key={i}>{tag.name}</a>
      </span>
    )
  })
}

export default function PostMeta ({ post }) {
  return (
    <div className='post_meta'>
      <span className='post_meta__avatar'>
        <img src={post.author.avatar_urls.wordpress_96} />
      </span>

      <span className='post_meta__text'>
        By {post.author.name}<br />
        {post.date} – <PostMetaTags tags={post.categories} />
      </span>
    </div>
  )
}
