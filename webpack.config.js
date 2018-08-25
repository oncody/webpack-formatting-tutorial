'use strict';

const eslintConfig = require('oncody-eslint-config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
        use: ['html-loader', 'html-shaper-loader']
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          // MiniCssExtractPlugin.loader,
          'css-loader',
          // 'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './index.html', inject: false}),
    // new MiniCssExtractPlugin({
      // filename: 'index.css',
      // chunkFilename: 'index.css'
    // })
  ]
};
