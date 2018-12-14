import React from 'react'
import PostListItem from './Item'
import { PostTags } from '../Post'

function PostListTopics ({ topics }) {
  if (!topics) return null

  return (
    <div className='post_list__topics'>
      <strong>Topics:</strong> <PostTags tags={topics} />
    </div>
  )
}

export default function PostList ({ title, description, posts, topics }) {
  return (
    <div className='post_list'>
      <div className='post_list__brand'>
        <h1>{title}</h1>

        <p className='post_list__intro'>
          {description}
        </p>

        <PostListTopics topics={topics} />
      </div>

      {posts.map((post, i) => <PostListItem key={i} post={post} />)}
    </div>
  )
}
