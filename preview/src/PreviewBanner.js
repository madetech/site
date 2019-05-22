import React from 'react'
import { UncontrolledTooltip } from 'reactstrap'

export default function PreviewBanner() {
  return (
    <div className="fixed-top text-right p-3">
      <div
        className="d-inline-block text-white shadow border border-white bg-warning py-2 px-4"
        id="preview"
        style={{cursor: 'help'}}
      >
        <strong>Preview Mode</strong>
      </div>

      <UncontrolledTooltip placement="bottom" target="preview">
        <div className="p-2">
          This is a preview page. Links won't work as expected.
        </div>
      </UncontrolledTooltip>
    </div>
  )
}
