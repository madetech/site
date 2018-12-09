import React from 'react'
import Helmet from 'react-helmet'

export default function Meta () {
  return (
    <Helmet>
      <html lang='en' />
      <title>Made Tech Blog</title>
      <meta name='description' content='Read about the latest trends and techniques being used to deliver modern web applications. Featuring articles from the team at Made Tech and guest posts by selected industry experts.' />
      <meta name='keywords' content='Made, Blog, Software, Agile, Rails, MadeTech, Made Tech, Spree Commerce, Spree, DevOps, Software Engineering, Continuous Delivery, Ruby on Rails' />
      <meta property='og:url' content='https://www.madetech.com/blog' />
      <meta property='og:title' content='Made Tech Blog' />
      <meta property='og:description' content='Read about the latest trends and techniques being used to deliver modern web applications. Featuring articles from the team at Made Tech and guest posts by selected industry experts.' />

      <link
        href='http://www.madetech.com/feed'
        rel='alternate'
        type='application/atom+xml'
        title='Latest blog posts from Made Tech'
        />
    </Helmet>
  )
}
