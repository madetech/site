import React from 'react'
import { Jumbotron } from '@madetech/frontend'
import { PostTags } from '../Post'

function PostListTopics({ topics, withPrefix }) {
  if (!topics) return null

  return (
    <div className="post_list__topics">
      <strong>Topics:</strong>{' '}
      <PostTags extraClassName="light" tags={topics} withPrefix={withPrefix} />
    </div>
  )
}

export default function PostListIntro({
  parent,
  title,
  description,
  topics,
  withPrefix,
}) {
  return (
    <div className="post_list_intro">
      <Jumbotron>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="post_list_intro__inner">
                {parent}

                <h1>{title}</h1>

                <p className="post_list_intro__description">{description}</p>

                <PostListTopics topics={topics} withPrefix={withPrefix} />
              </div>
            </div>
          </div>
        </div>
      </Jumbotron>
    </div>
  )
}
