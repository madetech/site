import React, { useEffect, useState } from 'react'
import qs from 'query-string'
import { fetchEntry } from './data/contentful'
import Layout from './gatsby/components/Layout'
import Contentful from './gatsby/components/Contentful'
import Loading from './Loading'
import PreviewBanner from './PreviewBanner'

export default function App() {
  const [page, setPage] = useState({ title: 'Made Tech Preview' })

  useEffect(() => {
    const fetchPage = async () => {
      const { id } = qs.parse(window.location.search)
      const newPage = await fetchEntry(id)
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
      {page.content ? <Contentful content={page.content} /> : <Loading />}

      <PreviewBanner />
    </Layout>
  )
}
