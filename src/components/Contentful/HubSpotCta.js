import React from 'react'

export default class ContentfulHubSpotCta extends React.Component {
  render() {
    return (
      <div>
        <div
          dangerouslySetInnerHTML={{ __html: this.props.embedCode.embedCode }}
        />
      </div>
    )
  }
}
