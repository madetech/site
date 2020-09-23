import React from 'react'
import { shallow } from 'enzyme'
import Prose from './Prose'

describe('<Prose />', () => {
  it('Renders the prose component successfully', () => {
    const component = shallow(<Prose />)

    expect(component.find({ 'data-test': 'prose' }).length).toBe(1)
  })

  describe('without previousPage className', () => {
    const component = shallow(<Prose />)

    it('Does not render the Previous Page button', () => {
      expect(
        component.find({ 'data-test': 'previous-page-button' }).length
      ).toBe(0)
    })
  })
})
