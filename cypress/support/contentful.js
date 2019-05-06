import * as contentful from 'contentful'

function createClient () {
  return contentful.createClient({
    accessToken: Cypress.env('CONTENTFUL_ACCESS_TOKEN'),
    host: Cypress.env('CONTENTFUL_HOST'),
    space: Cypress.env('CONTENTFUL_SPACE_ID')
  })
}

function getAllPages () {
  return createClient().getEntries({
    'content_type': 'page'
  })
}

export async function getAllPageSlugs () {
  return (await getAllPages()).items.map(page => page.fields.slug)
}
