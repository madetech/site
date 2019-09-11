import React from 'react'
const reactStringReplace = require('react-string-replace')

export default function threeSpaceToLineBreak(str, isInnerHtml = false) {
  if (isInnerHtml) {
    return reactStringReplace(str, '   ', (match, i) => <br key={i} />)
  }

  const regEx = new RegExp('   ', 'g')
  return str.replace(regEx, '<br/>')
}
