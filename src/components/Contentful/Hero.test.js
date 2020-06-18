import React from 'react'
import { mount } from 'enzyme'
import heroContent from '../../../test/fixtures/contentful/hero'
import Contentful from '.'

describe('Hero', () => {
  describe('when content provided with no image', () => {
    const contentful = mount(<Contentful content={[heroContent()]} />)

    it('renders title correctly', () => {
      expect(
        contentful.find('h1.contentful-hero__page-title').html()
      ).toContain('Case Studies')
    })

    it('renders breadcrumb correctly', () => {
      expect(
        contentful.find('div.contentful-hero__breadcrumb').html()
      ).toContain('<a href="/">Home</a> / <a>Case Studies</a>')
    })

    it('render text correctly', () => {
      contentful.find('div.contentful-hero__text').forEach(n => {
        expect(n.html()).toContain('This is some text')
      })
    })
  })
})
