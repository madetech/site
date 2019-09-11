import React from 'react'
const reactStringReplace = require('react-string-replace')

export default function threeSpaceToLineBreak(str) {
  return reactStringReplace(str, '   ', (match, i) => <br key={i} />)
}

export function threeSpaceToLineBreakHtmlFriendly(str) {
  const regEx = new RegExp('   ', 'g')
  return str.replace(regEx, '<br />')
}
