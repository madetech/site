const reactStringReplace = require('react-string-replace')

export default function threeHyphenToSoftHyphen(str, returnAsString = false) {
  if (!returnAsString) {
    return reactStringReplace(str, /(.*---.*)/g, m => {
      const regEx = new RegExp(/-{3}/, 'g')
      return m.replace(regEx, '\u00AD')
    })
  }

  const regEx = new RegExp(/-{3}/, 'g')
  return str.replace(regEx, '&shy;')
}
