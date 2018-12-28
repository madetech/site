import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function MetaHelmet ({ title, description, keywords, siteUrl }) {
  return (
    <Helmet>
      <html lang='en' />
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <meta property='og:url' content={siteUrl} />
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

export default function Meta ({ titlePrefix }) {
  const renderMetaHelmet = data => {
    const metadata = { ...data.site.siteMetadata }
    if (titlePrefix) metadata.title = `${titlePrefix} – ${metadata.title}`

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
