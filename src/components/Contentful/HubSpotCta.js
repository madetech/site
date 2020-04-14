import React from 'react'

export default class ContentfulHubSpotCta extends React.Component {
  componentDidMount() {
    this.embedForm()
  }

  embedForm() {
    if (window.hbspt) {
      try {
        window.hbspt.forms.create({
          target: `#${this.props.id}`,
          ctaId: this.props.ctaId,
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
    return <div id={this.props.id} />
  }
}
