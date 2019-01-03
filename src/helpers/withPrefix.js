/*global __PATH_PREFIX__ */
import { withPrefix as gatsbyWithPrefix } from 'gatsby'

export default function withPrefix (path) {
  if (path === '') {
    return __PATH_PREFIX__ || '/'
  } else {
    return gatsbyWithPrefix(path)
  }
}
