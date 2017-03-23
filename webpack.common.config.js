const { resolve } = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  loaders: {
    jsx: {
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
    jade: {
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
    sass: {
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
            loader: 'sass',
            options: {
              indentedSyntax: true,
              includePaths: resolve(__dirname, 'src')
            }
          }
        ]
      })
    },
    ttf: {
      test: /.ttf$/,
      use: [
        {
          loader: 'file',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: '/public/fonts/',
            publicPath: '/public/fonts/'
          }
        }
      ]
    },
    svg: {
      test: /.svg$/,
      use: [
        {
          loader: 'file',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: '/public/images/svg/',
            publicPath: '/public/images/svg/'
          }
        }
      ]
    },
    images: {
      test: /.(jpe?g|png)$/,
      use: [
        {
          loader: 'file',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: '/public/images/',
            publicPath: '/public/images/'
          }
        }
      ]
    }
  },

  alias: {
    routes: resolve(__dirname, 'src/routes'),
    components: resolve(__dirname, 'src/components'),
    containers: resolve(__dirname, 'src/containers'),
    stylesheets: resolve(__dirname, 'src/stylesheets'),
    fonts: resolve(__dirname, 'src/static/fonts'),
    uikit: resolve(__dirname, 'src/ui-kit'),
    reducers: resolve(__dirname, 'src/reducers/'),
    actions: resolve(__dirname, 'src/actions'),
    utils: resolve(__dirname, 'src/utils'),
    images: resolve(__dirname, 'src/static/images')
  },

  extensions: ['.jsx', '.js', '.sass'],

  context: resolve(__dirname, 'src'),

  resolveLoader: { moduleExtensions: ['-loader'] },

  devtool: 'source-map',

  devServer: {
    contentBase: resolve(__dirname, 'dist'),
    port: 3000,
    historyApiFallback: true
  }
}
