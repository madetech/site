import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Contentful from '../../components/Contentful'
import JobBoard from '../../components/JobBoard';

export default function CareerPageTemplate({ data }) {
  const page = data.contentfulPage;

  return (
    <Layout description={page.description} titlePrefix={page.title}>
      <Contentful content={page.content} />
      <JobBoard />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    contentfulPage(id: { eq: $id }) {
      id
      title
      description
      content {
        __typename
        ...inlineImages
        ...jumbotron
        ...prose
        ... on ContentfulGrid {
          name
          alignItems
          style
          content {
            __typename
            ...card
            ...hubSpotForm
            ...prose
          }
        }
      }
    }
  }
`
