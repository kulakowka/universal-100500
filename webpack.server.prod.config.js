const fs = require('fs')
const { resolve } = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const commonConfig = require('./webpack.common.config')

module.exports = {
  context: commonConfig.context,

  target: 'node',

  entry: './server.js',

  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'server.js'
  },

  // Правила обработки
  module: {
    rules: [
      commonConfig.loaders.jsx,
      commonConfig.loaders.jade,
      commonConfig.loaders.sass,
      commonConfig.loaders.images
    ]
  },

  resolve: {
    modules: ['node_modules', resolve(__dirname, 'src')],
    extensions: ['.jsx', '.js', '.sass'],
    alias: {
      routes: resolve(__dirname, 'src/routes'),
      components: resolve(__dirname, 'src/components'),
      containers: resolve(__dirname, 'src/containers'),
      stylesheets: resolve(__dirname, 'src/stylesheets'),
      fonts: resolve(__dirname, 'src/static/fonts'),
      uikit: resolve(__dirname, 'src/ui-kit'),
      reducers: resolve(__dirname, 'src/reducers'),
      utils: resolve(__dirname, 'src/utils'),
      images: resolve(__dirname, 'src/static/images')
    }
  },

  externals: fs.readdirSync('node_modules').reduce(function (accumulator, module) {
    accumulator[module] = `commonjs ${module}`
    return accumulator
  }, {}),

  resolveLoader: {
    // Чтобы понимал что babel это babel-loader
    moduleExtensions: ['-loader']
  },

  plugins: [
    new ExtractTextPlugin('trash.css')
  ]
}
