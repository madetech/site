import React from 'react'
import Grid from '../Contentful/Grid'

export default function BookPreview() {
  let styles = { paddingTop: 50 }

  let props = {
    alignItems: 'start',
    content: [
      {
        __typename: 'ContentfulProse',
        name: 'UCT > Download Preview',
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
                    value: 'Download a preview of our new book',
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
                    value:
                      'User-centred practices put user needs at the core of technology cultures. We can reduce waste in our processes by buying and building technology that meets researched and validated user needs rather than what we assume they need.',
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
                      uri:
                        '/resources/ebook/user-centred-practices-for-sustainable-technology',
                    },
                    content: [
                      {
                        data: {},
                        marks: [],
                        value: 'Get your preview copy now',
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
            src:
              '//images.ctfassets.net/42mpmljx5x5c/2kBIDZ1XEzYz36FL7q4M49/c63812f0d9573308705be0ecb868c285/user-centered_practices_for_sustainable_technology.png?w=1000&q=50',
            srcSet:
              '//images.ctfassets.net/42mpmljx5x5c/2kBIDZ1XEzYz36FL7q4M49/c63812f0d9573308705be0ecb868c285/user-centered_practices_for_sustainable_technology.png?w=1000&h=1411&q=50 1x',
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
        name: 'UCT > Book Showcase',
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
            src:
              '//images.ctfassets.net/42mpmljx5x5c/2kBIDZ1XEzYz36FL7q4M49/c63812f0d9573308705be0ecb868c285/user-centered_practices_for_sustainable_technology.png?w=1000&q=50',
            srcSet:
              '//images.ctfassets.net/42mpmljx5x5c/2kBIDZ1XEzYz36FL7q4M49/c63812f0d9573308705be0ecb868c285/user-centered_practices_for_sustainable_technology.png?w=1000&h=1411&q=50 1x',
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
    id: 'misc-uct',
    layout: 'normal',
    style: 'book-blue',
  }

  return (
    <div class="new-design" style={styles}>
      <Grid {...props} />
    </div>
  )
}
