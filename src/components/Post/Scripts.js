import React from 'react'
import Helmet from 'react-helmet'

export default function Scripts({ withPrefix }) {
  return (
    <Helmet>
      {/* Syntax Highlighting */}
      <script src={withPrefix('/prism.js')} />
    </Helmet>
  )
}
