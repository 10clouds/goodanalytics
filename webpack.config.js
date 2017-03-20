const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/main.js',
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].[hash].js',
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./src/index.html'),
    }),
    new CleanWebpackPlugin(['dist']),
  ],
  devtool: 'source-map',
};
