import React from 'react'
import Jumbotron from '../Jumbotron'
import { PostTags } from '../Post'

function PostListTopics ({ topics }) {
  if (!topics) return null

  return (
    <div className='post_list__topics'>
      <strong>Topics:</strong> <PostTags tags={topics} />
    </div>
  )
}

export default function PostListIntro ({ title, description, topics }) {
  return (
    <div className='post_list_intro'>
      <Jumbotron>
        <div className='post_list_intro__inner'>
          <h1>{title}</h1>

          <p className='post_list_intro__description'>
            {description}
          </p>

          <PostListTopics topics={topics} />
        </div>
      </Jumbotron>
    </div>
  )
}
