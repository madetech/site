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
      const { previewType, id } = qs.parse(window.location.search)
      let newPage

      switch (previewType) {
        case 'wordpress':
          newPage = await fetchWordPressPost(id)
          break
        case 'contentful':
        default:
          newPage = await fetchContentfulEntry(id)
          break
      }

      newPage.__previewType = previewType
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
