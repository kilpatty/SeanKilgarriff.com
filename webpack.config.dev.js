/* eslint global-require: 0*/

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  context: `${__dirname}/src`,
  devtool: 'inline-source-map',
  entry: [
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
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: /src/,
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        include: /src/,
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        include: [
          path.resolve('src'),
          path.resolve('node_modules/preact-compat/src'),
        ],
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
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
      'process.env.GA_ID': JSON.stringify('UA-46649481-5'),
    }),
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true,
  },
};
