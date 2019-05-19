import React from 'react'
import Cookies from 'universal-cookie'

export default class ContentfulHubSpotForm extends React.Component {
  constructor(props) {
    super(props)
    this.cookies = new Cookies()
    this.state = {
      hideCookieConsent: true
    }
  }

  componentDidMount() {
    if (!this.cookies.get('hideCookieConsent')) {
      this.setState({ hideCookieConsent: false })
    }
  }

  handleClick() {
    const oneYearFromNow = new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    this.cookies.set('hideCookieConsent', true, { expires: oneYearFromNow, path: '/' })
    this.setState({ hideCookieConsent: true })
  }

  render() {
    if (this.state.hideCookieConsent) return null

    return (
      <div className="fixed-bottom p-3" style={{ background: '#252525', color: '#ddd'}} >
        <div className='container d-md-flex justify-content-between align-items-center'>
          <div className='my-2'>We use cookies on this website to ensure you get the best experience.</div>

          <button
            className='btn btn-outline-light'
            onClick={this.handleClick.bind(this)}
          >
            Okay, got it!
          </button>
        </div>
      </div>
    )
  }
}
