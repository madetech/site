import React from 'react'
const reactStringReplace = require('react-string-replace')

export default function threeHyphenToSoftHyphen(str, returnAsString = false) {
  if (!returnAsString) {
    return reactStringReplace(str, '---', (match, i) => (
      <span key={i}>&shy;</span>
    ))
  }

  const regEx = new RegExp(/-{3}/, 'g')
  return str.replace(regEx, '&shy;')
}