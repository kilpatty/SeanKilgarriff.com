/* eslint global-require: 0*/

// webpack.config.prod.js
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SitemapPlugin = require('sitemap-webpack-plugin');

// These are the paths that are located on my website.
const paths = [
  '/pgp',
  '/bar/',
];

// Css Loader
const cssLoaders = [
  {
    loader: 'css',
    query: {
      importLoaders: 1,
      modules: true,
      localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
    },
  },
  'postcss',
];


// Get the environment of staging vs production in here.
// Then assign the urls based off of that.

module.exports = {
  devtool: 'source-map',
  entry: ['babel-polyfill', './src/index'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env.GA_ID': JSON.stringify('UA-46649481-3'),
    }),
    new CopyWebpackPlugin([
      { from: 'public/' },
    ]),
    new ExtractTextPlugin({ filename: 'style.css', disable: false, allChunks: true }),
    new SitemapPlugin('https://seankilgarriff.com', paths, 'sitemap.xml'),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel'],
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: cssLoaders,
        }),
      },
    ],
  },
};
