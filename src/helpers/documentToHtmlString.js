import { BLOCKS } from '@contentful/rich-text-types'
import { documentToHtmlString as _documentToHtmlString } from '@contentful/rich-text-html-renderer'

export default function documentToHtmlString(doc) {
  return _documentToHtmlString(doc, {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, next) =>
        `<p>${next(node.content).replace(/\n/g, '<br>')}</p>`,
    },
  })
}
