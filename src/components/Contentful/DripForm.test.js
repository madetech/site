import React from 'react'
import { shallow } from 'enzyme'
import DripForm from './DripForm'

describe('<DripForm>', () => {
  describe('with all correct props', () => {
    const sampleDescription =
      '{"data": {}, "content": [], "nodeType": "document"}'
    const component = shallow(
      <DripForm
        dripFormId={12345}
        headline="I like dogs"
        formDescription={{
          formDescription: sampleDescription,
        }}
        formFields={['Email', 'First Name', 'Last Name']}
        formTags={['email', 'first_name', 'last_name']}
      />
    )

    it('Renders the component with information provided by props', () => {
      expect(component.find({ 'data-test': 'headline' }).text()).toBe(
        'I like dogs'
      )
    })

    it('Builds input fields for each of the formFields', () => {
      expect(component.find({ 'data-test': 'email' }).length).toBe(1)
      expect(component.find({ 'data-test': 'first_name' }).length).toBe(1)
      expect(component.find({ 'data-test': 'last_name' }).length).toBe(1)
    })
  })

  describe('with missing props', () => {
    const component = shallow(
      <DripForm
        dripFormId={undefined}
        headline={undefined}
        formDescription={undefined}
        formFields={undefined}
        formTags={undefined}
      />
    )

    it('does not render the form', () => {
      expect(
        component.find({ 'data-test': 'contentful-drip-form' }).length
      ).toBe(0)
    })
  })
})
