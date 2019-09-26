import React, { Fragment } from 'react'
const reactStringReplace = require('react-string-replace')

export default function threeSpaceToLineBreak(str, returnAsString = false) {
  if (!returnAsString) {
    let replacements = 0
    return reactStringReplace(str, '   ', (match, i) => (
      <Fragment key={`${match} ${replacements++}`}>
        <br />{' '}
      </Fragment>
    ))
  }

  const regEx = new RegExp(/ {3}/, 'g')
  return str.replace(regEx, '<br/> ')
}
