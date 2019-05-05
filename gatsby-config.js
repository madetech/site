require('dotenv').config()

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '.',
        background_color: '#ffffff',
        theme_color: '#000000',
        display: 'minimal-ui',
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST || 'cdn.contentful.com',
        spaceId: process.env.CONTENTFUL_SPACE_ID,
      },
    },
    {
      resolve: '@madetech/gatsby-source-wordpress',
      options: {
        baseUrl: process.env.WORDPRESS_BASE_URL,
        protocol: 'https',
        hostingWPCOM: true,
        useACF: false,
        verboseOutput: true,
        auth: {
          wpcom_app_clientSecret: process.env.WORDPRESS_CLIENT_SECRET,
          wpcom_app_clientId: process.env.WORDPRESS_CLIENT_ID,
          wpcom_user: process.env.WORDPRESS_USERNAME,
          wpcom_pass: process.env.WORDPRESS_PASSWORD
        },
        includedRoutes: [
          "**/posts",
          "**/categories",
          "**/taxonomies",
          "**/tags",
          "**/users"
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allWordpressPost } }) => {
              return allWordpressPost.edges.map(({ node }) => {
                return {
                  title: node.title,
                  description: node.excerpt,
                  author: node.author.name,
                  categories: node.categories.map(({ name }) => name),
                  date: node.date,
                  url: `${site.siteMetadata.siteUrl}/${node.slug}`,
                  guid: `${site.siteMetadata.siteUrl}/${node.slug}`,
                  custom_elements: [{ "content:encoded": node.content }],
                }
              })
            },
            query: `
              {
                allWordpressPost(
                  sort: { fields: [date], order: DESC },
                  limit: 10
                ) {
                  edges {
                    node {
                      title
                      excerpt
                      content
                      slug
                      date
                      author {
                        name
                      }
                      categories {
                        name
                        slug
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml'
          },
        ],
      },
    },
  ],
}
