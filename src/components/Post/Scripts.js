import React from 'react'
import Helmet from 'react-helmet'
import { withPrefix } from 'gatsby'

export default function Scripts () {
  return (
    <Helmet>
      {/* Syntax Highlighting */}
      <script src={withPrefix('/prism.js')}></script>
    </Helmet>
  )
}
