import React from 'react'

export default class ContentfulHubSpotForm extends React.Component {
  componentDidMount () {
    this.embedForm()
  }

  embedForm () {
    if (window.hbspt) {
      window.hbspt.forms.create({
        target: `#${this.props.id}`,

        portalId: "554916",
        formId: this.props.formId
      })
    } else {
      console.debug('waiting for hubspot...')
      setTimeout(this.embedForm.bind(this), 13)
    }
  }

  render () {
    return (
      <div className={'contentful-hub-spot-form'} id={this.props.id} />
    )
  }
}
