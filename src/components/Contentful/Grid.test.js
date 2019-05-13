import React from 'react'
import { shallow } from 'enzyme'
import Grid from './Grid'

describe('Grid', () => {
  describe('when content is undefined', () => {
    it('throws prop type error', () => {
      const render = () => shallow(<Grid />)
      expect(render).toThrow('Failed prop type')
    })
  })

  describe('when an empty array of content provided', () => {
    it('renders with No Content Error', () => {
      const grid = shallow(<Grid content={[]} />)
      expect(grid).toIncludeText('No Content Error')
    })
  })
})
