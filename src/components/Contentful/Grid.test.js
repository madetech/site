import React from 'react'
import { mount } from 'enzyme'
import Grid from './Grid'
import proseContent from '../../../test/fixtures/contentful/prose'
import cardContent from '../../../test/fixtures/contentful/card'

describe('Grid', () => {
  describe('when content provided', () => {
    it('renders successfully', () => {
      const grid = mount(<Grid content={[proseContent(), cardContent()]} />)
      expect(grid).toIncludeText('Check out our book')
    })
  })

  describe('when content is invalid', () => {
    it('displays Render Content Error if no content provided', () => {
      console.error = jest.fn()

      const grid = mount(<Grid />)

      expect(console.error).toHaveBeenCalled()
      expect(grid).toIncludeText('Grid Render Content Error')
    })

    it('displays Render Content Error if empty content array provided', () => {
      console.error = jest.fn()

      const grid = mount(<Grid content={[]} />)

      expect(console.error).toHaveBeenCalled()
      expect(grid).toIncludeText('Grid Render Content Error')
    })

    it('displays nothing if body of Prose is empty', () => {
      const invalidProseContent = { ...proseContent(), body: null }
      const grid = mount(<Grid content={[invalidProseContent]} />)
      expect(grid).not.toIncludeText('Grid Render Content Error')
    })

    it('displays nothing if body of Card is empty', () => {
      const invalidCardContent = { ...cardContent(), body: null }
      const grid = mount(<Grid content={[invalidCardContent]} />)
      expect(grid).not.toIncludeText('Grid Render Content Error')
    })
  })
})
