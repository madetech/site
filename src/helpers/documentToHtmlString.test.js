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
})
