import React from 'react'

export default class ContentfulHubSpotForm extends React.Component {
  componentDidMount() {
    this.embedForm()
  }

  embedForm() {
    if (window.HubSpotForms) {
      try {
        window.HubSpotForms.create({
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
    const { id, buttonColour } = this.props;
    const isWebinarRegisterPage = id && id.includes("resources-webinars-enhancing-developer-productivity-september-sign-up-register")
    return (
      <div
        className={`contentful-hub-spot-form ${buttonColour}${isWebinarRegisterPage ? ' error-message-color' : ""}`}
        id={this.props.id}
      />
    )
  }
}
