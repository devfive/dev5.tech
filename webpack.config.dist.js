const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./config/config');
const exclude = /node_modules/;

module.exports = {
  entry: [
    // 'babel-polyfill',
    './src/index',
  ],
  output: {
    filename: 'app-[hash:7].js',
    publicPath: config.paths.baseUrl,
    path: config.paths.dist,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
      __DEV__: false,
    }),
    new webpack.optimize.UglifyJsPlugin({ minimize: true, output: { comments: false } }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new HtmlWebpackPlugin({
      template: `html!preprocess!src/index.html`,
      inject: true,
    }),
  ],
  debug: true,
  devtool: 'cheap-module-source-map',
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
        loader: 'file?name=assets/[hash:7].[ext]!image-webpack',
        exclude,
      },
      {
        test: /\.ttf$/,
        loader: 'file?name=assets/[hash:7].[ext]',
        exclude,
      },
    ],
  },
  eslint: {
    failOnWarning: false,
    failOnError: true,
  },
};
