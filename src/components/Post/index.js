import React from 'react'
import Helmet from 'react-helmet'
import PostAboutAuthor from './AboutAuthor'
import PostMeta from './Meta'
import PostTags from './Tags'
import initGists from './initGists'

export default class Post extends React.Component {
  componentDidMount () {
    initGists()
  }

  render () {
    const post = this.props.post

    return (
      <article className='post' itemScope itemType='http://schema.org/BlogPosting'>
        <Helmet>
          <script src='/prism.js'></script>
        </Helmet>

        <meta itemProp='datePublished' content='{{ post.date }}' />
        <meta itemProp='headline' content='{{post.title}}' />

        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />

        <PostMeta post={post} />

        <div className='post__body' dangerouslySetInnerHTML={{ __html: post.content }} />

        <PostAboutAuthor author={post.author} />
      </article>
    )
  }
}

export { PostMeta, PostTags }
