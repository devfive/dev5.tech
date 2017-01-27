const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./config/config');
const exclude = /node_modules/;

module.exports = {
  entry: [
    'babel-polyfill',
    './src/index',
    `webpack-dev-server/client?http://localhost:${config.ports.frontend}`,
  ],
  output: {
    filename: 'app.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: true,
    }),
    new HtmlWebpackPlugin({
      template: `html!preprocess!src/index.html`,
      inject: true,
    }),
  ],
  debug: true,
  devtool: 'eval',
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        include: [path.join(__dirname, 'src')],
        loader: 'eslint-loader',
      },
    ],
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.join(__dirname, 'src'),
        ],
        loader: 'babel-loader',
        query: {
          presets: [
            'es2015',
          ],
        },
      },
      {
        test: /\.scss$/,
        loader: 'style!css!autoprefixer!sass',
        exclude,
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'file',
        exclude,
      },
      { test: /\.ttf$/i, loader: 'file', exclude },
    ],
  },
  devServer: {
    contentBase: './src',
    port: config.ports.frontend,
  },
  eslint: {
    failOnWarning: false,
    failOnError: true,
  },
};
