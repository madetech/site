import React from 'react'

export default class ContentfulHubSpotForm extends React.Component {
  componentDidMount() {
    this.embedForm()
  }

  embedForm() {
    if (window.hbspt) {
      try {
        window.hbspt.forms.create({
          target: `#${this.props.id}`,
          portalId: '554916',
          formId: this.props.formId,
        })
      } catch (e) {
        console.error('failed to load hubspot form')
        console.error(e)
      }
    } else {
      console.debug('waiting for hubspot...')
      setTimeout(this.embedForm.bind(this), 13)
    }
  }

  render() {
    return (
      <div
        className={'contentful-hub-spot-form ' + this.props.buttonColour}
        id={this.props.id}
      />
    )
  }
}
