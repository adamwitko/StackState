const path = require("path");
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
    },{
      test: /\.html$/,
      use: ['file-loader?name=[name].[ext]'],
      exclude: /node_modules/      
    }]
  },

  plugins: [
    new HtmlWebpackPlugin({
    template: '!!pug-loader!src/index.pug',
    mobile: true,
    hash: true,
  })],

  devServer: {
    historyApiFallback: true,
    stats: 'errors-only'
  }
}
