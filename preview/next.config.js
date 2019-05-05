const withPlugins = require('next-compose-plugins')
const withSass = require('@zeit/next-sass')
const withImages = require('next-images')
const withFonts = require('next-fonts')
const withTM = require('next-transpile-modules')
const webpack = require('webpack')
const { parsed: localEnv } = require('dotenv').config({
  path: '../.env'
})

module.exports = withPlugins([
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
], {
  webpack (config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv))
    return config
  }
})
