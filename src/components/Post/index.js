import React from 'react'
import PostAboutAuthor from './AboutAuthor'
import PostMeta from './Meta'
import initGists from './initGists'

export default class Post extends React.Component {
  componentDidMount () {
    initGists()
  }

  render () {
    const post = this.props.post

    return (
      <article className='post'>
        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />

        <PostMeta post={post} />

        <div className='post__body' dangerouslySetInnerHTML={{ __html: post.content }} />

        <PostAboutAuthor author={post.author} />
      </article>
    )
  }
}

export { PostMeta }
