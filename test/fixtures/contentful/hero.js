export default function() {
  return {
    __typename: 'ContentfulHero',
    name: 'Case Studies',
    isHeader: 'yes',
    pageBreadcrumb: {
      links: [
        {
          title: 'Home',
          url: '/',
        },
        {
          title: 'Case Studies',
          url: null,
        },
      ],
    },
    pageTitle: 'Case Studies',
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
                value: 'This is some text',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
        ],
        nodeType: 'document',
      },
    },
    headerImageLayout: null,
    headerImageShadowColour: null,
    textColour: 'green',
    headerImage: null,
    textSize: null,
    backgroundColour: 'white',
    customClasses: null,
    headerLinks: null,
  }
}
