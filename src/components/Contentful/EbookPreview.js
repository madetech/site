import React from 'react'
import Grid from '../Contentful/Grid'

const EbookPreview = props => {
  let styles = { paddingTop: 50 }

  let parameters = {
    alignItems: props.content.alignItems,
    content: props.content.content[0],
    customClasses: props.content.customClasses,
    id: props.content.id,
    layout: props.content.layout,
    style: props.content.themeStyleColour,
  }

  return (
    <div class="new-design" style={styles}>
      <Grid {...parameters} />
    </div>
  )
}

export default EbookPreview
