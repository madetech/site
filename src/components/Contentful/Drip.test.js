import React from 'react'
import { shallow } from 'enzyme'
import DripForm from './Drip'

describe('<DripForm>', () => {
  it('Renders the component with information provided by props', () => {
    const component = shallow(
      <DripForm
        formId={12345}
        headline="I like dogs"
        description="Sign up to this wonderful form for more dog related content."
      />
    )

    expect(component.find({ 'data-test': 'headline' }).text()).toBe(
      'I like dogs'
    )
    expect(component.find({ 'data-test': 'description' }).text()).toBe(
      'Sign up to this wonderful form for more dog related content.'
    )
  })
})
