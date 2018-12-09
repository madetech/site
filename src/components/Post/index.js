import React from 'react'

function PostCategoryNames ({ categories }) {
  return categories.map((c, i) => {
    return (
      <span className='post__tag'>
        <a href={c.name} key={i}>{c.name}</a>
      </span>
    )
  })
}

export default function Post ({ post }) {
  return (
    <article className='post'>
      <h1 dangerouslySetInnerHTML={{ __html: post.title }} />

      <div className='post__meta'>
        <span className='post__avatar'>
          <img src={post.author.avatar_urls.wordpress_96} />
        </span>

        <span className='post__meta_text'>
          By {post.author.name}<br />
          {post.date} – <PostCategoryNames categories={post.categories} />
        </span>
      </div>

      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  )
}
