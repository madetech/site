import React from 'react'
import Helmet from 'react-helmet'

function MetaHelmet({ title, description, keywords, url, siteUrl }) {
  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <link
        href={`${siteUrl}/rss.xml`}
        rel="alternate"
        type="application/rss+xml"
        title={`${title} – ${description}`}
      />
    </Helmet>
  )
}

export default function Meta({ description, titlePrefix, url }) {
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

  return <MetaHelmet {...metadata} />
}
