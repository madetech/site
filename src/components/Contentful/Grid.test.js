import React from 'react'
import { mount } from 'enzyme'
import Grid from './Grid'
import cardContent from '../../../test/fixtures/contentful/card'
import hubSpotFormContent from '../../../test/fixtures/contentful/hubSpotForm'
import proseContent from '../../../test/fixtures/contentful/prose'

describe('Grid', () => {
  describe('when content provided', () => {
    it('renders successfully', () => {
      console.debug = jest.fn()
      
      const grid = mount(<Grid content={[cardContent(), hubSpotFormContent(), proseContent()]} />)
      expect(grid).toIncludeText('Check out our card')
      expect(grid.find('#insights-grid-sign-up-to-newsletter')).toExist()
      expect(grid).toIncludeText('Check out our prose')
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
