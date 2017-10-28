const path = require("path");

const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/app.tsx'],

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js'
  },

  resolve: {
    extensions: ['ts', '.tsx', '.js']
  },

  module: {
    rules: [{
      test: /\.tsx$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }, {
      test: /\.tsx$/,
      use: 'tslint-loader',
      exclude: /node_modules/
    }, {
      test: /\.html$/,
      use: ['file-loader?name=[name].[ext]'],
      exclude: /node_modules/
    }, {
      test: /\.(scss|sass)$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', {
          loader: 'postcss-loader',
          options: {
            plugins: function () {
              return [autoprefixer({
                browsers: [
                  'ie >= 10',
                  'ff >= 35', // Jan 13th, 2015
                  'chrome >= 40', // Jan 20th, 2015
                  'safari >= 9', // ~2013
                  'opera >= 27', // Jan 27th, 2015
                  'ios >= 7', // ~2014 - covers to iPhone 4 worst case
                  'android >= 4.4', // Latest minor version
                ]
              })]
            }
          }
        }]
      })
    }]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: '!!pug-loader!src/index.pug',
      mobile: true,
      hash: true,
    }), new ExtractTextPlugin({
      filename: 'app.css',
      allChunks: true,
    }),],

  devServer: {
    historyApiFallback: true,
    stats: 'errors-only'
  }
}
