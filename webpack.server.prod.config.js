const webpack = require('webpack')
const fs = require('fs')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, 'src'),

  target: 'node',

  entry: './server.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js'
  },

  // Правила обработки
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel',
            options: {
              presets: ['react', 'es2015', 'stage-2']
            }
          }
        ]
      },
      {
        test: /.jade$/,
        use: [
          {
            loader: 'pug',
            options: {
              pretty: true
            }
          }
        ]
      },
      {
        test: /.sass/,
        use: ExtractTextPlugin.extract({
          fallback: 'style',
          use: [
            {
              loader: 'css',
              options: {
                importLoaders: 1,
                modules: true,
                localIdentName: '[name]-[local]-[hash:base64:6]'
              }
            },
            {
              loader:'sass',
              options: {
                indentedSyntax: true,
                includePaths: path.resolve(__dirname, 'src')
              }
            }
          ]
        })
      },
      {
        test: /.jpg/,
        use: [
          {
            loader: 'file',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'public/'
            }
          }
        ]
      }
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
