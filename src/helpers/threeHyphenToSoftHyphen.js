import React from 'react'
const reactStringReplace = require('react-string-replace')

export default function threeHyphenToSoftHyphen(str, returnAsString = false) {
  if (!returnAsString) {
    let replacements = 0
    return reactStringReplace(str, '---', match => (
      <span key={`${match} ${replacements++}`}>&shy;</span>
    ))
  }

  const regEx = new RegExp(/-{3}/, 'g')
  return str.replace(regEx, '&shy;')
}
