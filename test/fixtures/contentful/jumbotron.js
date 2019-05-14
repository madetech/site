export default function () {
  return {
    __typename: 'ContentfulJumbotron',
    name: 'Resources / Ebooks / AP > Jumbotron',
    background:
     { fixed:
        { height: 320,
          src:
           '//images.ctfassets.net/42mpmljx5x5c/6APXhi8wHmffgt4pSBwwWr/2b3d36547e1ba7262b7efc196146f509/darkgrey_websitebanner.png?w=1600&q=50',
          srcSet:
           '//images.ctfassets.net/42mpmljx5x5c/6APXhi8wHmffgt4pSBwwWr/2b3d36547e1ba7262b7efc196146f509/darkgrey_websitebanner.png?w=1600&h=320&q=50 1x',
          width: 1600 } },
    body:
     { json:
        { nodeType: 'document',
          data: {},
          content:
           [ { nodeType: 'heading-1',
               content:
                [ { nodeType: 'text',
                    value: 'Agile Planning - Best Practice Guide',
                    marks: [],
                    data: {} } ],
               data: {} },
             { nodeType: 'paragraph',
               content:
                [ { nodeType: 'text', value: '', marks: [], data: {} },
                  { nodeType: 'hyperlink',
                    content:
                     [ { nodeType: 'text',
                         value: 'Download your E-book',
                         marks: [],
                         data: {} } ],
                    data: { uri: '#resources-ebooks-ap-form-grid-download-form' } },
                  { nodeType: 'text', value: '', marks: [], data: {} } ],
               data: {} } ] } },
    columnWidth: 12,
    columnOffset: null,
    textAlign: 'center'
  }
}
