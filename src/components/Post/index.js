import React from 'react'
import { Prose } from '@madetech/frontend'
import PostAboutAuthor from './AboutAuthor'
import PostMeta from './Meta'
import PostScripts from './Scripts'
import PostTags from './Tags'
import { Hiring } from '../../components/Marketing'
import initGists from './initGists'
import trackTags from './trackTags'

export default class Post extends React.Component {
  componentDidMount() {
    initGists()
    trackTags(this.props.post.categories, this.props.post.tags)
  }

  render() {
    const { post, withPrefix } = this.props

    return (
      <article
        className="post"
        itemScope
        itemType="http://schema.org/BlogPosting"
      >
        <Prose>
          <meta itemProp="datePublished" content="{{ post.date }}" />
          <meta itemProp="headline" content="{{post.title}}" />

          <h1 className="post__title">{post.title}</h1>

          <PostMeta post={post} withPrefix={withPrefix} />

          <div
            className="post__body"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <PostAboutAuthor author={post.author} />

          <Hiring />

          {/* ConvertFlow Area */}
          <div className="cf-1407-area-4492" />

          <PostScripts withPrefix={withPrefix} />
        </Prose>
      </article>
    )
  }
}

export { PostMeta, PostTags }
