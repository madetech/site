import React, { useEffect, useState } from 'react'
import qs from 'query-string'
import { fetchContentfulEntry } from './data/contentful'
import { fetchWordPressPost } from './data/wordpress'
import Layout from './gatsby/components/Layout'
import Content from './Content'
import Loading from './Loading'
import PreviewBanner from './PreviewBanner'

export default function App() {
  const [page, setPage] = useState({ title: 'Made Tech Preview' })

  useEffect(() => {
    const fetchPage = async () => {
      const { p, id } = qs.parse(window.location.search)

      let newPage

      if (p) {
        const { access_token } = qs.parse(window.location.hash)
        newPage = await fetchWordPressPost(p, access_token)
        newPage.__previewType = 'wordpress'
      } else if (id) {
        newPage = await fetchContentfulEntry(id)
        newPage.__previewType = 'contentful'
      } else {
        alert(
          'You did not specify a preview identifier. Redirecting you to www.madetech.com'
        )
        window.location = 'https://www.madetech.com'
      }

      setPage(newPage)
    }

    fetchPage()
  }, [])

  return (
    <Layout
      customClasses={page.customClasses}
      description={page.description}
      featureFlags={page.featureFlags}
      titlePrefix={page.title}
    >
      {page.content ? <Content page={page} /> : <Loading />}

      <PreviewBanner />
    </Layout>
  )
}
