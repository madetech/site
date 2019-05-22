import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import App from './App'

describe('App', () => {
  let div

  beforeEach(() => {
    div = document.createElement('div')
    document.body.appendChild(div)
  })

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders without crashing', () => {
    act(() => {
      ReactDOM.render(<App />, div)
    })
  })
})
