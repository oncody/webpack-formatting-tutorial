'use strict';

const eslintConfig = require('oncody-eslint-config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './index.js'
  ],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: eslintConfig
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: ['html-loader','html-shaper-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './index.html'})
  ]
};
