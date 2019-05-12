import React from 'react'
import Layout from '../gatsby/components/Layout'
import Contentful from '../gatsby/components/Contentful'
import { fetchEntry } from '../data/contentful'

export default function Preview ({ page }) {
  return (
    <Layout description={page.description} titlePrefix={page.title}>
      <Contentful content={page.content} />
      <script src="/reload/reload.js"></script>
    </Layout>
  )
}

Preview.getInitialProps = async function ({ query }) {
  return {
    page: await fetchEntry(query.id)
  }
}
