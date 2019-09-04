import React from 'react'
const reactStringReplace = require('react-string-replace')

export default function threeSpaceToLineBreak(str) {
  return reactStringReplace(str, '   ', () => (<br />));
}