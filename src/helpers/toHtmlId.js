export default function toHtmlId(str) {
  return str.toLowerCase().replace(/[^a-z]+/g, '-')
}
