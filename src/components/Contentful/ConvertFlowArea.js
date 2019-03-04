import React from 'react'

export default function ContentfulConvertFlowArea ({ convertFlowDivClass, id }) {
  let className = 'contentful-convert-flow-area'

  return (
    <div className={className} id={id}>
      <div className={convertFlowDivClass} />
    </div>
  )
}
