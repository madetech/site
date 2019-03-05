import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function MetaHelmet ({ title, description, keywords, url, siteUrl }) {
  return (
    <Helmet>
      <html lang='en' />
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      {url && <meta property='og:url' content={url} />}
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />

      <link
        href={`${siteUrl}/rss.xml`}
        rel='alternate'
        type='application/rss+xml'
        title={`${title} – ${description}`}
        />
    </Helmet>
  )
}

export default function Meta ({ description, titlePrefix, url }) {
  const renderMetaHelmet = data => {
    const metadata = { ...data.site.siteMetadata }
    if (description) metadata.description = description
    if (titlePrefix) metadata.title = `${titlePrefix} – ${metadata.title}`
    if (url) metadata.url = url

    return (
      <MetaHelmet {...metadata} />
    )
  }

  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
              keywords
              siteUrl
            }
          }
        }
      `}
      render={renderMetaHelmet}
      />
  )
}
