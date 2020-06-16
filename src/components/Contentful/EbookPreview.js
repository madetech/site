import React from 'react'
import Grid from '../Contentful/Grid'

const EbookPreview = props => {
  let styles = { paddingTop: 50 }

  let parameters = {
    alignItems: 'start',
    content: [
      {
        __typename: 'ContentfulProse',
        name: 'MLA > Download Preview',
        body: {
          json: {
            data: {},
            content: [
              {
                data: {},
                content: [
                  {
                    data: {},
                    marks: [],
                    value: props.title,
                    nodeType: 'text',
                  },
                ],
                nodeType: 'heading-2',
              },
              {
                data: {},
                content: [
                  {
                    data: {},
                    marks: [],
                    value: props.description.content.content.value,
                    nodeType: 'text',
                  },
                ],
                nodeType: 'paragraph',
              },
              {
                data: {},
                content: [
                  {
                    data: {},
                    marks: [],
                    value: '',
                    nodeType: 'text',
                  },
                  {
                    data: {
                      uri: props.slugUri,
                    },
                    content: [
                      {
                        data: {},
                        marks: [],
                        value: props.ctaText,
                        nodeType: 'text',
                      },
                    ],
                    nodeType: 'hyperlink',
                  },
                  {
                    data: {},
                    marks: [],
                    value: '',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'paragraph',
              },
            ],
            nodeType: 'document',
          },
        },
        columnGroup: null,
        columnWidth: 6,
        columnOffset: 0,
        customClasses: null,
        extraLargeColumnWidth: 4,
        extraLargeColumnOffset: 1,
        extraSmallColumnWidth: 12,
        extraSmallColumnOffset: 0,
        image: {
          fixed: {
            height: 1411,
            src: `${props.bookImage.fluid.src}&q=50`,
            srcSet: `${props.bookImage.fluid.src}&h=1411&q=50 1x`,
            width: 1000,
          },
        },
        imageStyle: 'before',
        mediumColumnWidth: 6,
        mediumColumnOffset: 0,
        smallColumnWidth: 6,
        smallColumnOffset: 0,
        style: 'small',
        textAlign: 'left',
      },
      {
        __typename: 'ContentfulProse',
        name: 'MLA > Book Showcase',
        body: null,
        columnGroup: null,
        columnWidth: 5,
        columnOffset: 1,
        customClasses: null,
        extraLargeColumnWidth: 5,
        extraLargeColumnOffset: 1,
        extraSmallColumnWidth: 12,
        extraSmallColumnOffset: 0,
        image: {
          fixed: {
            height: 1411,
            src: `${props.bookImage.fluid.src}&q=50`,
            srcSet: `${props.bookImage.fluid.src}&h=1411&q=50 1x`,
            width: 1000,
          },
        },
        imageStyle: null,
        mediumColumnWidth: 6,
        mediumColumnOffset: 0,
        smallColumnWidth: 6,
        smallColumnOffset: 0,
        style: null,
        textAlign: 'center',
      },
    ],
    customClasses: ['book__showcase', 'book'],
    id: 'misc-mla',
    layout: 'normal',
    style: props.themeStyleColour,
  }

  return (
    <div class="new-design" style={styles}>
      <Grid {...props} />
    </div>
  )
}

export default EbookPreview
