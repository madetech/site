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
    <Jumbotron>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 offset-lg-2'>
            <div className='post_list_intro'>
              <h1>{title}</h1>

              <p className='post_list_intro__description'>
                {description}
              </p>

              <PostListTopics topics={topics} />
            </div>
          </div>
        </div>
      </div>
    </Jumbotron>
  )
}
