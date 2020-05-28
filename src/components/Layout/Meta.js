import React from 'react'
import Helmet from 'react-helmet'

function MetaHelmet({ title, description, keywords, url, siteUrl, image }) {
  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="image" content={image} />

      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {url && <meta name="twitter:url" content={url} />}
      {image && <meta name="twitter:image" content={`https:${image}`} />}

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
  }

  if (description) metadata.description = description
  if (titlePrefix) metadata.title = `${titlePrefix} – ${metadata.title}`
  if (url) metadata.url = url
  if (image) metadata.image = image

  return <MetaHelmet {...metadata} />
}
