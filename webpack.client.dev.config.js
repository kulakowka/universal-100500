const webpack = require('webpack')
const path = require('path')
const ManifestPlugin = require('webpack-manifest-plugin')

// const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  // домашняя директория для entry и module.rules.loader
  context: path.resolve(__dirname, 'src'),

  // Точка(-и) входа приложения
  entry: {
    'public/app': './client.js'},

  // Точка выхода приложения
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/public/',
    filename: '[name].js'
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
        test: /.sass$/,
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
        test: /.ttf$/,
        use: [
          {
            loader: 'file',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'public/'
            }
          }
        ]
      },
      {
        test: /.svg$/,
        use: [
          {
            loader: 'file',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'public/images/'
            }
          }
        ]
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
      reducers: path.resolve(__dirname, 'src/reducers/'),
      actions: path.resolve(__dirname, 'src/actions'),
      utils: path.resolve(__dirname, 'src/utils'),
      images: path.resolve(__dirname, 'src/static/images')
    }
  },

  resolveLoader: {
    // Чтобы понимал что babel это babel-loader
    moduleExtensions: ['-loader']
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),
    new ManifestPlugin()
  ],

  devtool: 'source-map',

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 3000,
    // Нужно чтобы работали внутренние ссылки
    historyApiFallback: true
  },

  watch: true
}
