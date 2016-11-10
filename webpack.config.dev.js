/* eslint global-require: 0*/

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  context: `${__dirname}/src`,
  devtool: 'cheap-eval-source-map',
  entry: [
    'babel-polyfill',
    'webpack-dev-server/client?http://localhost:8080',
    // 'webpack/hot/dev-server',
    './index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel'],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins() {
                return [
                  require('precss')({ /* ...options */ }),
                  require('autoprefixer')({ /* ...options */ }),
                ];
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new CopyWebpackPlugin([
      { from: '../public/' },
    ]),
    new webpack.DefinePlugin({
      'process.env.GA_ID': JSON.stringify('xxxxxxxxxx'),
    }),
    new ExtractTextPlugin('style.css'),
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true,
  },
};
