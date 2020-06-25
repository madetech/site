import React from 'react'
import { shallow } from 'enzyme'
import MobileMenu from './MobileMenu'

describe('<MobileMenu />', () => {
  describe('given some props', () => {
    let links = {
      Content: '/content',
      Services: '/service',
      'Dogs of Made Tech': '/dogs-of-madetech',
    }

    const component = shallow(<MobileMenu links={links} />)

    it('renders the links correctly', () => {
      expect(
        component.find({ 'data-test': Object.keys(links)[0] }).text()
      ).toBe(Object.keys(links)[0])
      expect(
        component.find({ 'data-test': Object.keys(links)[1] }).text()
      ).toBe(Object.keys(links)[1])
      expect(
        component.find({ 'data-test': Object.keys(links)[2] }).text()
      ).toBe(Object.keys(links)[2])
    })
  })

  describe('given no props', () => {
    const component = shallow(<MobileMenu />)

    it('renders the default links', () => {
      expect(component.find({ 'data-test': 'default-services' }).text()).toBe(
        'Services'
      )
      expect(component.find({ 'data-test': 'default-sectors' }).text()).toBe(
        'Sectors'
      )
      expect(
        component.find({ 'data-test': 'default-case-studies' }).text()
      ).toBe('Case Studies')
      expect(component.find({ 'data-test': 'default-careers' }).text()).toBe(
        'Careers'
      )
      expect(component.find({ 'data-test': 'default-blog' }).text()).toBe(
        'Blog'
      )
      expect(component.find({ 'data-test': 'default-contact' }).text()).toBe(
        'Contact'
      )
    })
  })
})
