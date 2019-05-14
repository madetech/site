import request from 'request-promise'
import { getAllPageSlugs } from '../support/contentful'

describe('Smoke test for Contentful pages', function() {
  it('All published pages render with 200', async function() {
    const slugs = await getAllPageSlugs()

    slugs.forEach(async slug => {
      const response = await request({
        uri: `https://www.madetech.com/${slug}`,
        resolveWithFullResponse: true,
      })

      expect(response.statusCode).toEqual(200)
      expect(response.body).not.toMatch('Render Content Error')
    })
  })
})
