import React from 'react'
import { shallow } from 'enzyme'
import Faker from 'faker'
import HeaderLinks from './headerLinks'

describe('<HeaderLinks />', () => {
  describe('given some props', () => {
    const headerTitles = [
      Faker.lorem.word(),
      Faker.lorem.word(),
      Faker.lorem.word(),
    ]
    const headerLinks = [
      `/${Faker.lorem.word()}`,
      `/${Faker.lorem.word()}`,
      `/${Faker.lorem.word()}`,
    ]
    const component = shallow(
      <HeaderLinks headerTitles={headerTitles} headerLinks={headerLinks} />
    )

    it('renders the links correctly', () => {
      expect(component.find({ 'data-test': headerTitles[0] }).text()).toBe(
        headerTitles[0]
      )
      expect(component.find({ 'data-test': headerTitles[1] }).text()).toBe(
        headerTitles[1]
      )
      expect(component.find({ 'data-test': headerTitles[2] }).text()).toBe(
        headerTitles[2]
      )
    })

    it('attaches the correct href slug', () => {
      expect(
        component
          .find({ 'data-test': headerTitles[0] })
          .at(0)
          .props().href
      ).toBe(headerLinks[0])
      expect(
        component
          .find({ 'data-test': headerTitles[1] })
          .at(0)
          .props().href
      ).toBe(headerLinks[1])
      expect(
        component
          .find({ 'data-test': headerTitles[2] })
          .at(0)
          .props().href
      ).toBe(headerLinks[2])
    })
  })

  describe('given no props', () => {
    const component = shallow(<HeaderLinks />)

    it('renders the default headers and links', () => {
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

  describe('given only headerTitle props', () => {
    const headerTitles = [
      Faker.lorem.word(),
      Faker.lorem.word(),
      Faker.lorem.word(),
    ]
    const component = shallow(<HeaderLinks headerTitles={headerTitles} />)

    it('renders the default headers and links', () => {
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

  describe('given only headerLinks props', () => {
    const headerLinks = [
      Faker.lorem.word(),
      Faker.lorem.word(),
      Faker.lorem.word(),
    ]
    const component = shallow(<HeaderLinks headerLinks={headerLinks} />)

    it('renders the default headers and links', () => {
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

  describe('given different numbers of title and link props', () => {
    const headerTitles = [
      Faker.lorem.word(),
      Faker.lorem.word(),
      Faker.lorem.word(),
    ]
    const headerLinks = [`/${Faker.lorem.word()}`, `/${Faker.lorem.word()}`]
    const component = shallow(
      <HeaderLinks headerTitles={headerTitles} headerLinks={headerLinks} />
    )

    it('renders the default headers and links', () => {
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
