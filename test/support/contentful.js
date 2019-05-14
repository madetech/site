import * as contentful from 'contentful'

function createClient() {
  return contentful.createClient({
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    host: process.env.CONTENTFUL_HOST,
    space: process.env.CONTENTFUL_SPACE_ID,
  })
}

function getAllPages() {
  return createClient().getEntries({
    content_type: 'page',
  })
}

export async function getAllPageSlugs() {
  return (await getAllPages()).items.map(page => page.fields.slug)
}
