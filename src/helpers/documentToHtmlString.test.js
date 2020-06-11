import { BLOCKS } from '@contentful/rich-text-types'
import documentToHtmlString from './documentToHtmlString'
import proseContent from '../../test/fixtures/contentful/prose'

describe('documentToHtmlString()', () => {
  it('should replace newlines with <br />', () => {
    const proseBody = proseContent().body.json
    proseBody.content[0].nodeType = BLOCKS.PARAGRAPH
    proseBody.content[0].content[0].value = 'Cool\nBob'
    expect(documentToHtmlString(proseBody)).toEqual('<p>Cool<br>Bob</p>')
  })

  it('should show image title as test', () => {
    const fields = JSON.parse(
      '{ "title": { "en-US": "test" }, "file": { "en-US": { "url": "http://images.ctfassets.net/test.png", "fileName": "icon.png", "contentType": "image/png" }}}'
    )
    const proseBody = proseContent().body.json
    proseBody.content[0].nodeType = BLOCKS.EMBEDDED_ASSET
    proseBody.content[0].data = {
      target: {
        fields,
      },
    }
    expect(documentToHtmlString(proseBody)).toEqual(
      '<img title="test" alt="" src="http://images.ctfassets.net/test.png" />'
    )
  })

  it('should show image title having no value when null', () => {
    const fields = JSON.parse(
      '{ "file": { "en-US": { "url": "http://images.ctfassets.net/test.png", "fileName": "icon.png", "contentType": "image/png" }}}'
    )
    const proseBody = proseContent().body.json
    proseBody.content[0].nodeType = BLOCKS.EMBEDDED_ASSET
    proseBody.content[0].data = {
      target: {
        fields,
      },
    }
    expect(documentToHtmlString(proseBody)).toEqual(
      '<img title="" alt="" src="http://images.ctfassets.net/test.png" />'
    )
  })

  it('should show image description as test', () => {
    const fields = JSON.parse(
      '{ "description": { "en-US": "test" }, "file": { "en-US": { "url": "http://images.ctfassets.net/test.png", "fileName": "icon.png", "contentType": "image/png" }}}'
    )
    const proseBody = proseContent().body.json
    proseBody.content[0].nodeType = BLOCKS.EMBEDDED_ASSET
    proseBody.content[0].data = {
      target: {
        fields,
      },
    }
    expect(documentToHtmlString(proseBody)).toEqual(
      '<img title="" alt="test" src="http://images.ctfassets.net/test.png" />'
    )
  })

  it('should show image description having no value when null', () => {
    const fields = JSON.parse(
      '{ "file": { "en-US": { "url": "http://images.ctfassets.net/test.png", "fileName": "icon.png", "contentType": "image/png" }}}'
    )
    const proseBody = proseContent().body.json
    proseBody.content[0].nodeType = BLOCKS.EMBEDDED_ASSET
    proseBody.content[0].data = {
      target: {
        fields,
      },
    }
    expect(documentToHtmlString(proseBody)).toEqual(
      '<img title="" alt="" src="http://images.ctfassets.net/test.png" />'
    )
  })
})
