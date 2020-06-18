import React from 'react'
import Grid from '../Contentful/Grid'

export default function BookPreview() {
  let styles = { paddingTop: 50 }

  let props = {
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
                      'Legacy technology is one of the biggest threats to public sector organisations. Whether you’ve started your journey already or don’t know where to begin, this book has been written to guide you to define and implement the right approach for your organisation. ',
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
                        '/resources/books/modernising-legacy-applications-in-the-public-sector',
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
              '//images.ctfassets.net/42mpmljx5x5c/riHt3d6aTGTalWvZLW2zT/f80a201433c62b9edc8705f3dc2286d4/book_-_Modernising__Legacy_Applications__in_the_Public_Sector_2x__1_.png?w=1000&q=50',
            srcSet:
              '//images.ctfassets.net/42mpmljx5x5c/riHt3d6aTGTalWvZLW2zT/f80a201433c62b9edc8705f3dc2286d4/book_-_Modernising__Legacy_Applications__in_the_Public_Sector_2x__1_.png?w=1000&h=1411&q=50 1x',
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
            src:
              '//images.ctfassets.net/42mpmljx5x5c/riHt3d6aTGTalWvZLW2zT/f80a201433c62b9edc8705f3dc2286d4/book_-_Modernising__Legacy_Applications__in_the_Public_Sector_2x__1_.png?w=1000&q=50',
            srcSet:
              '//images.ctfassets.net/42mpmljx5x5c/riHt3d6aTGTalWvZLW2zT/f80a201433c62b9edc8705f3dc2286d4/book_-_Modernising__Legacy_Applications__in_the_Public_Sector_2x__1_.png?w=1000&h=1411&q=50 1x',
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
    style: 'red',
  }

  return (
    <div class="new-design" style={styles}>
      <Grid {...props} />
    </div>
  )
}
