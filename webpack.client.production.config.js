const commonConfig = require('./webpack.common.config')

const webpack = require('webpack')
const ManifestPlugin = require('webpack-manifest-plugin')
const { resolve } = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  context: commonConfig.context,

  entry: {
    'public/app': './client.js'
  },

  output: {
    path: resolve(__dirname, 'dist'),
    publicPath: '/public/',
    filename: '[name].[chunkhash].js'
  },

  module: {
    rules: [
      commonConfig.loaders.jsx,
      commonConfig.loaders.jade,
      commonConfig.loaders.sass,
      commonConfig.loaders.ttf,
      commonConfig.loaders.images,
      commonConfig.loaders.svg
    ]
  },

  resolve: {
    modules: ['node_modules', resolve(__dirname, 'src')],
    extensions: commonConfig.extensions,
    alias: commonConfig.alias
  },

  resolveLoader: commonConfig.resolveLoader,

  plugins: [
    new ExtractTextPlugin('[name].[chunkhash].css'),
    new ManifestPlugin(),
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __SERVER__: false,
      __DEV__: true
    })
  ]
}
