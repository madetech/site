import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

function Post ({ post }) {
  const categoryNames = post.categories.map((c, i) => <span className='post__tag'><a href={c.name} key={i}>{c.name}</a></span>)

  return (
    <div className='post_list_item'>
      <h2>
        <a href={`/${post.slug}`} dangerouslySetInnerHTML={{ __html: post.title }} />
      </h2>

      <div className='lead' dangerouslySetInnerHTML={{ __html: post.excerpt }} />

      <div className='post_list_item__meta'>
        <span className='post__avatar'>
          <img src={post.author.avatar_urls.wordpress_96} />
        </span>

        <span className='post__meta_text'>
          By {post.author.name}<br />
          {post.date} – {categoryNames}
        </span>
      </div>
    </div>
  )
}

export default function Index ({ data }) {
  return (
    <Layout>
      <div className='post_list'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 offset-md-2'>
              <div className='my-5'>
                <div className='post_list__brand'>
                  <h1>Made Tech Blog</h1>
                </div>

                <p className='post_list__intro'>
                  A treatise on modern software delivery by the engineers in the trenches.
                </p>
              </div>

              {data.allWordpressPost.edges.map(({ node }) => Post({ post: node }))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          excerpt
          slug
          date(formatString: "Do MMMM YYYY")
          author {
            avatar_urls {
              wordpress_96
            }
            name
          }
          categories {
            name
          }
        }
      }
    }
  }
`
