import { BLOCKS } from '@contentful/rich-text-types'
import { documentToHtmlString as _documentToHtmlString } from '@contentful/rich-text-html-renderer'

const LOCALE = 'en-US' // contentful default

export default function documentToHtmlString(doc) {
  return _documentToHtmlString(doc, {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, next) => {
        return `<p>${next(node.content).replace(/\n/g, '<br>')}</p>`
      },
      [BLOCKS.EMBEDDED_ASSET]: node => {
        if (node.data.target.fields) {
          const { title, description, file } = node.data.target.fields
          const mimeType = file.contentType || file[LOCALE].contentType
          const mimeGroup = mimeType.split('/')[0]

          switch (mimeGroup) {
            case 'image':
              return `<img title="${
                title ? title.field || title[LOCALE] : null
              }" alt="${
                description ? description.field || description[LOCALE] : null
              }" src="${file.url || file[LOCALE].url}" />`
            default:
              return `<span style={{ backgroundColor: 'red', color: 'white' }}>${mimeType} embedded asset</span>`
          }
        }
      },
    },
  })
}
