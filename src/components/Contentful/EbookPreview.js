import React from 'react'
import Grid from '../Contentful/Grid'

const EbookPreview = props => {
  let styles = { paddingTop: 50 }

  if (props.content === undefined) {
    return
  }

  let grid = props.content.content[0]

  let parameters = {
    alignItems: grid.alignItems,
    content: grid.content,
    customClasses: grid.customClasses,
    id: grid.id,
    layout: grid.layout,
    style: grid.style,
  }

  return (
    <div class="new-design" style={styles}>
      <Grid {...parameters} />
    </div>
  )
}

export default EbookPreview
