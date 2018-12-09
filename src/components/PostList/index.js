import React from 'react'
import PostListItem from './Item'

export default function PostList ({ posts }) {
  return (
    <div className='post_list'>
      <div className='post_list__brand'>
        <h1>Made Tech Blog</h1>

        <p className='post_list__intro'>
          A treatise on modern software delivery by the engineers in the trenches.
        </p>
      </div>

      {posts.map(post => <PostListItem post={post} />)}
    </div>
  )
}
