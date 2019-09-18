import React from 'react'
const reactStringReplace = require('react-string-replace')

export default function threeSpaceToLineBreak(str, returnAsString = false) {
  if (!returnAsString) {
    return reactStringReplace(str, '   ', (match, i) => (
      <span key={i}>
        <br key={i} />{' '}
      </span>
    ))
  }

  const regEx = new RegExp(/ {3}/, 'g')
  return str.replace(regEx, '<br/> ')
}
