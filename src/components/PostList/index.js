import React from 'react'
import PostListIntro from './Intro'
import PostListItem from './Item'

export default function PostList({ posts, withPrefix }) {
  return (
    <div className="post_list">
      {posts.map((post, i) => (
        <PostListItem key={i} post={post} withPrefix={withPrefix} />
      ))}
    </div>
  )
}

export { PostListIntro }
