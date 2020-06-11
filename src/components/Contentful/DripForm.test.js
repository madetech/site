import React from 'react'
import { shallow } from 'enzyme'
import DripForm from './DripForm'

describe('<DripForm>', () => {
  const component = shallow(
    <DripForm
      dripFormId={12345}
      headline="I like dogs"
      formDescription={{
        formDescription:
          'Sign up to this wonderful form for more dog related content.',
      }}
      formFields={['Email', 'First Name', 'Last Name']}
    />
  )
  it('Renders the component with information provided by props', () => {
    expect(component.find({ 'data-test': 'headline' }).text()).toBe(
      'I like dogs'
    )
    expect(component.find({ 'data-test': 'description' }).text()).toBe(
      'Sign up to this wonderful form for more dog related content.'
    )
  })

  it('Builds input fields for each of the formFields', () => {
    expect(component.find({ 'data-test': 'Email' }).length).toBe(1)
    expect(component.find({ 'data-test': 'First Name' }).length).toBe(1)
    expect(component.find({ 'data-test': 'Last Name' }).length).toBe(1)
  })
})
