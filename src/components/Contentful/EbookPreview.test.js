import React from 'react'
import { shallow } from 'enzyme'
import EbookPreview from './EbookPreview'

describe('EbookPreview', () => {
  it('Renders the component with information provided by props', () => {
    const component = shallow(
      <EbookPreview
        alignItems="Expect start"
        content={{
          content: [{ name: 'Expect download' }, { name: 'Expect showcase' }],
        }}
        customClasses={['book__showcase', 'book']}
        id="24e7a389-e2f0-51d7-8519-4ce5a594fcb7"
        layout="Expect normal"
        style="Expect red"
      />
    )
    expect(component.find({ 'data-test': 'ebook' }).length).toBe(1)
  })

  it('Returns null when props is null', () => {
    const component = shallow(
      <EbookPreview
        alignItems="Expect start"
        content={null}
        customClasses={['book__showcase', 'book']}
        id="24e7a389-e2f0-51d7-8519-4ce5a594fcb7"
        layout="Expect normal"
        style="Expect red"
      />
    )
    expect(component.find({ 'data-test': 'ebook' }).length).toBe(0)
  })
})
