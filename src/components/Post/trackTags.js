function mergeSlugs (...tagGroups) {
  return tagGroups.reduce((names, tags) => names.concat((tags || []).map(({ slug }) => slug)), [])
}

export default function trackTags (...tags) {
  const slugs = mergeSlugs(...tags)
  window._pq = window._pq || []
  slugs.forEach(slug => window._pq.push(['track', slug]))
}
