import request from 'request-promise'
import { getAllPageSlugs } from '../support/contentful'

describe('Smoke test for Contentful pages', function() {
  it('All published pages render with 200', async function() {
    jest.setTimeout(10000)
    expect.hasAssertions()

    const slugs = await getAllPageSlugs()

    return Promise.all(
      slugs.map(async slug => {
        const response = await request({
          uri: `${process.env.SMOKE_URL}/${slug}`,
          resolveWithFullResponse: true,
        })

        expect(response.statusCode).toEqual(200)
        expect(response.body).not.toMatch('Render Content Error')
        expect(response.body).not.toMatch('Unknown Content Type')
      })
    )
  })
})
