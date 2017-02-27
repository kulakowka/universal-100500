const fs = require('fs')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const commonConfig = require('./webpack.common.config')

module.exports = {
  context: commonConfig.context,

  target: 'node',

  entry: './server.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
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
    modules: ['node_modules', path.resolve( __dirname, 'src' )],
    extensions: ['.jsx', '.js', '.sass'],
    alias: {
      routes: path.resolve(__dirname, 'src/routes'),
      components: path.resolve(__dirname, 'src/components'),
      containers: path.resolve(__dirname, 'src/containers'),
      stylesheets: path.resolve(__dirname, 'src/stylesheets'),
      fonts: path.resolve(__dirname, 'src/static/fonts'),
      uikit: path.resolve(__dirname, 'src/ui-kit'),
      reducers: path.resolve(__dirname, 'src/reducers'),
      utils: path.resolve(__dirname, 'src/utils'),
      images: path.resolve(__dirname, 'src/static/images')
    }
  },

  externals: fs.readdirSync('node_modules').reduce(function (accumulator, module) {
    accumulator[module] = `commonjs ${module}`;

    return accumulator;
  }, {}),

  resolveLoader: {
    // Чтобы понимал что babel это babel-loader
    moduleExtensions: ['-loader']
  },

  plugins: [
    new ExtractTextPlugin('trash.css'),
  ]
}
