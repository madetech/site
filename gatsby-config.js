require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Made Tech Blog',
    description: 'Read about the latest trends and techniques being used to deliver modern web applications. Featuring articles from the team at Made Tech and guest posts by selected industry experts.',
    siteUrl: 'https://www.madetech.com/blog',
    keywords: 'Made, Blog, Software, Agile, Rails, MadeTech, Made Tech, Spree Commerce, Spree, DevOps, Software Engineering, Continuous Delivery, Ruby on Rails',
  },
  pathPrefix: '/blog',
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#000000',
        display: 'minimal-ui',
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
  ],
}
