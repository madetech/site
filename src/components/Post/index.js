import React from 'react'
import { Jumbotron, Prose } from '@madetech/frontend'
import PostAboutAuthor from './AboutAuthor'
import PostMeta from './Meta'
import PostScripts from './Scripts'
import PostTags from './Tags'
import { Hiring } from '../../components/Marketing'
import BookPreview from '../../components/BookPreview'
import initGists from './initGists'
import trackTags from './trackTags'
import EbookPreview from '../Contentful/EbookPreview'

export default class Post extends React.Component {
  componentDidMount() {
    initGists()
    trackTags(this.props.post.categories, this.props.post.tags)
  }

  render() {
    const { post, withPrefix, content } = this.props
    // const content = {
    //   title: 'Modernising Legacy Applications in the Public Sector',
    //   description: {
    //     content: {
    //       content: {
    //         value:
    //           'Read this preview of our e-book to learn more about modernising legacy applications in the public sector.',
    //       },
    //     },
    //   },
    //   slugUri:
    //     '/resources/books/modernising-legacy-applications-in-the-public-sector',
    //   ctaText: 'Get your preview copy now',
    //   bookImage: {
    //     fluid: {
    //       src:
    //         '//images.ctfassets.net/42mpmljx5x5c/7mHNViJuZ6JXdRnDNsVGEe/620333849b6c742c5fe16baa77d2b894/book_-_Modernising__Legacy_Applications__in_the_Public_Sector_2x.png?w=800&q=50',
    //     },
    //   },
    //   themeStyleColour: 'red',
    // }
    return (
      <>
        <Jumbotron extraClassName="mb-3 py-3">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <strong>
                  <a href={withPrefix('/blog')}>Made Tech Blog</a>
                </strong>
              </div>
            </div>
          </div>
        </Jumbotron>

        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <article
                className="post"
                itemScope
                itemType="http://schema.org/BlogPosting"
              >
                <Prose>
                  <meta itemProp="datePublished" content="{{ post.date }}" />
                  <meta itemProp="headline" content="{{post.title}}" />

                  <h1
                    className="post__title"
                    dangerouslySetInnerHTML={{ __html: post.title }}
                  />

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
            </div>
          </div>
        </div>

        {/*<BookPreview />*/}
        <EbookPreview content={content} />
      </>
    )
  }
}

export { PostMeta, PostTags }
