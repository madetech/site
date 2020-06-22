import { shallow } from 'enzyme'
import React from 'react'
import ContentfulHubSpotForm from '../../src/components/Contentful/HubSpotForm'

describe('Contentful Hubspot Form', () => {
  it('recieves the colour red', () => {
    const component = shallow(
      <ContentfulHubSpotForm formId="1" id="2" buttonColour="red" />
    )
    expect(
      component.find({ className: 'contentful-hub-spot-form red' }).length
    ).toEqual(1)
  })

  it('recieves the colour yellow', () => {
    const component = shallow(
      <ContentfulHubSpotForm formId="1" id="2" buttonColour="yellow" />
    )
    expect(
      component.find({ className: 'contentful-hub-spot-form yellow' }).length
    ).toEqual(1)
  })

  it('recieves the colour blue', () => {
    const component = shallow(
      <ContentfulHubSpotForm formId="1" id="2" buttonColour="blue" />
    )
    expect(
      component.find({ className: 'contentful-hub-spot-form blue' }).length
    ).toEqual(1)
  })

  it('recieves the colour book-blue', () => {
    const component = shallow(
      <ContentfulHubSpotForm formId="1" id="2" buttonColour="book-blue" />
    )
    expect(
      component.find({ className: 'contentful-hub-spot-form book-blue' }).length
    ).toEqual(1)
  })

  it('recieves the colour shaded', () => {
    const component = shallow(
      <ContentfulHubSpotForm formId="1" id="2" buttonColour="shaded" />
    )
    expect(
      component.find({ className: 'contentful-hub-spot-form shaded' }).length
    ).toEqual(1)
  })
})
