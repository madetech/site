import React, { Fragment } from 'react'
const reactStringReplace = require('react-string-replace')

export default function threeHyphenToSoftHyphen(str, returnAsString = false) {
  if (!returnAsString) {
    let replacements = 0
    return reactStringReplace(str, '---', match => (
      <Fragment key={`${match} ${replacements++}`}>&shy;</Fragment>
    ))
  }

  const regEx = new RegExp(/-{3}/, 'g')
  return str.replace(regEx, '&shy;')
}
