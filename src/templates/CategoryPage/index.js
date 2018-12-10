import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'

export default function PostPageTemplate ({ data }) {
  const category = data.wordpressCategory

  return (
    <Layout>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 offset-md-2' style={{ fontSize: '1.3rem' }}>
            <h1>{category.name}</h1>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    wordpressCategory(id: { eq: $id }) {
      description
      name
      slug
    }
  }
`
