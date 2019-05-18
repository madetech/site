function replaceNoAlphaWithHypens(str) {
  return str.replace(/[^a-z]+/g, '-')
}

function removeHyphensFromStartOfString(str) {
  return str.replace(/^\-/, '')
}

function removeHyphensFromEndOfString(str) {
  return str.replace(/\-$/, '')
}

export default function toHtmlId(str) {
  str = str.toLowerCase()
  str = replaceNoAlphaWithHypens(str)
  str = removeHyphensFromStartOfString(str)
  str = removeHyphensFromEndOfString(str)
  return str
}
