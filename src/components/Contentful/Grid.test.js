import React from 'react'
import { mount } from 'enzyme'
import Grid from './Grid'
import proseContent from '../../../test/fixtures/contentful/prose'

describe('Grid', () => {
  describe('when content provided', () => {
    it('renders successfully', () => {
      const grid = mount(<Grid content={[proseContent()]} />)
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
  })
})
