import React from 'react'

export default function PostAboutAuthor({ author }) {
  return (
    <div className="post_about_author">
      <div className="h3">About the Author</div>

      <div className="d-flex align-items-center">
        <div>
          <div className="post_about_author__name" />

          <div className="post_about_author__description">
            <strong>{author.name}</strong>
            <br />
            {author.description}
          </div>
        </div>

        <div className="post_about_author__avatar">
          <img src={author.avatar_urls.wordpress_96} alt="avatar" />
        </div>
      </div>
    </div>
  )
}
