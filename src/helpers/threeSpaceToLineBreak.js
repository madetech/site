export default function threeSpaceToLineBreak(str) {
  return str.replace(/ {3}/, '<br />')
}