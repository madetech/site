import React from 'react'
import { mount } from 'enzyme'
import Contentful from './'
import jumbotronContent from '../../../test/fixtures/contentful/jumbotron'
import proseContent from '../../../test/fixtures/contentful/prose'

describe('Contentful', () => {
  describe('when content provided', () => {
    it('renders successfully with simple content', () => {
      const contentful = mount(<Contentful content={[jumbotronContent()]} />)
      expect(contentful).toIncludeText('Agile Planning - Best Practice Guide')
    })
  })

  describe('when content invalid', () => {
    it('displays Render Content Error if no content provided', () => {
      console.error = jest.fn()

      const contentful = mount(<Contentful />)

      expect(console.error).toHaveBeenCalled()
      expect(contentful).toIncludeText('Render Content Error')
    })

    it('displays Render Content Error if empty content array provided', () => {
      console.error = jest.fn()

      const contentful = mount(<Contentful content={[]} />)

      expect(console.error).toHaveBeenCalled()
      expect(contentful).toIncludeText('Render Content Error')
    })

    it('displays Render Content Error if name is missing', () => {
      console.error = jest.fn()

      const invalidJumbotronContent = { ...jumbotronContent(), name: null }
      const contentful = mount(<Contentful content={[invalidJumbotronContent]} />)

      expect(console.error).toHaveBeenCalled()
      expect(contentful).toIncludeText('Render Content Error')
    })

    it('displays Render Content Error if __typename is missing', () => {
      console.error = jest.fn()

      const invalidJumbotronContent = { ...jumbotronContent(), __typename: null }
      const contentful = mount(<Contentful content={[invalidJumbotronContent]} />)

      expect(console.error).toHaveBeenCalled()
      expect(contentful).toIncludeText('Render Content Error')
    })

    it('displays Render Content Error if __typename is unrecognised', () => {
      const invalidJumbotronContent = { ...jumbotronContent(), __typename: 'ContentfulUnknown' }
      const contentful = mount(<Contentful content={[invalidJumbotronContent]} />)
      expect(contentful).toIncludeText('Unknown Content Type: ContentfulUnknown')
    })

    it('displays nothing if body of Jumbotron is empty', () => {
      const invalidJumbotronContent = { ...jumbotronContent(), body: null }
      const contentful = mount(<Contentful content={[invalidJumbotronContent]} />)
      expect(contentful).not.toIncludeText('Render Content Error')
    })

    it('displays nothing if background of Jumbotron is empty', () => {
      const invalidJumbotronContent = { ...jumbotronContent(), background: null }
      const contentful = mount(<Contentful content={[invalidJumbotronContent]} />)
      expect(contentful).not.toIncludeText('Render Content Error')
    })

    it('displays nothing if body of Prose is empty', () => {
      const invalidProseContent = { ...proseContent(), body: null }
      const contentful = mount(<Contentful content={[invalidProseContent]} />)
      expect(contentful).not.toIncludeText('Render Content Error')
    })
  })
})
