import React from 'react'
import { shallow } from 'enzyme'
import Grid from './Grid'

describe('Grid', () => {
  describe('when an empty array of content provided', () => {
    it('renders without error', () => {
      expect(shallow(<Grid content={[]} />)).toIncludeText('No Content Error')
    })
  })
})
