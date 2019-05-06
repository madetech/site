const withPlugins = require('next-compose-plugins')
const withSass = require('@zeit/next-sass')
const withImages = require('next-images')
const withFonts = require('next-fonts')
const withTM = require('next-transpile-modules')
const dotenv = require('dotenv')
const webpack = require('webpack')

module.exports = withPlugins(
  [
    [withSass, {
      cssLoaderOptions: {
        url: true
      }
    }],
    [withImages, {}],
    [withFonts, {}],
    [withTM, {
      transpileModules: ['@madetech/frontend']
    }]
  ],
  {
    webpack (config) {
      const { parsed: localEnv } = dotenv.config({ path: '../.env' })
      config.plugins.push(new webpack.EnvironmentPlugin(localEnv))
      return config
    }
  }
)
