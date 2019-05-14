import React from 'react'
import { mount, shallow } from 'enzyme'
import Contentful from './'
import jumbotronContent from '../../../test/fixtures/contentful/jumbotron'

describe('Contentful', () => {
  describe('when content provided', () => {
    it('renders successfully', () => {
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
  })
})
