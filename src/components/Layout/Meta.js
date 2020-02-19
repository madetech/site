import React from 'react'
import Helmet from 'react-helmet'
import ContentfulHero from '../Contentful/Hero'
//import {headerImage} from '../Contentful/Hero'

function MetaHelmet({ title, description, keywords, url, siteUrl, image }) {
  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="image" content={image} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <link
        href={`${siteUrl}/rss.xml`}
        rel="alternate"
        type="application/rss+xml"
        title={`${title} – ${description}`}
      />
    </Helmet>
  )
}

export default function Meta({ description, titlePrefix, url, image }) {
  const metadata = {
    title: 'Made Tech',
    description:
      'We build software delivery capabilities, deliver digital & technology, and run live services for ambitious organisations.',
    siteUrl: 'https://www.madetech.com',
    keywords:
      'Made, Software, Agile, Rails, MadeTech, Made Tech, Spree Commerce, Spree, DevOps, Software Engineering, Continuous Delivery, Ruby on Rails',
    image:
      'images.ctfassets.net/42mpmljx5x5c/49WJqdBjTa7Pg27MVKTAmV/01fb800c611acc703805bf07d5531b5d/bitmap.jpg?w=1780&q=50',
  }

  if (description) metadata.description = description
  if (titlePrefix) metadata.title = `${titlePrefix} – ${metadata.title}`
  if (url) metadata.url = url
  if (image) metadata.image = image

  return <MetaHelmet {...metadata} />
}
