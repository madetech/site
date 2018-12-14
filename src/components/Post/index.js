import React from 'react'
import Disqus from 'disqus-react'
import PostAboutAuthor from './AboutAuthor'
import PostMeta from './Meta'
import PostScripts from './Scripts'
import PostTags from './Tags'
import { Hiring } from '../../components/Marketing'
import initGists from './initGists'
import trackTags from './trackTags'

export default class Post extends React.Component {
  componentDidMount () {
    initGists()
    trackTags(this.props.post.categories, this.props.post.tags)
  }

  render () {
    const post = this.props.post
    const disqusShortname = 'madetech'

    return (
      <article className='post' itemScope itemType='http://schema.org/BlogPosting'>
        <meta itemProp='datePublished' content='{{ post.date }}' />
        <meta itemProp='headline' content='{{post.title}}' />

        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />

        <PostMeta post={post}  />

        <div className='post__body' dangerouslySetInnerHTML={{ __html: post.content }} />

        <PostAboutAuthor author={post.author} />

        <Hiring />

        {/* ConvertFlow Area */}
        <div className='cf-1407-area-4492'></div>

        {/* Disqus Comments */}
        <Disqus.DiscussionEmbed shortname={disqusShortname} config={{}} />

        <PostScripts />
      </article>
    )
  }
}

export { PostMeta, PostTags }
