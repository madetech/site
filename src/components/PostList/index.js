import React from 'react'
import PostListItem from './Item'

export default function PostList ({ title, description, posts }) {
  return (
    <div className='post_list'>
      <div className='post_list__brand'>
        <h1>{title}</h1>

        <p className='post_list__intro'>
          {description}
        </p>
      </div>

      {posts.map(post => <PostListItem post={post} />)}
    </div>
  )
}
