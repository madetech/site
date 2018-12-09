import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'

export default function PostTemplate ({ data }) {
  const post = data.wordpressPost
  const categoryNames = post.categories.map(c => c.name).join(', ')

  return (
    <Layout>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 offset-md-2' style={{ fontSize: '1.3rem' }}>
            <article className='post'>
              <h1 dangerouslySetInnerHTML={{ __html: post.title }} />

              <div className='post__meta'>
                <span className='post__avatar'>
                  <img src={post.author.avatar_urls.wordpress_96} />
                </span>

                <span className='post__meta_text'>
                  By {post.author.name}<br />
                  {post.date} – {categoryNames}
                </span>
              </div>

              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
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
`
