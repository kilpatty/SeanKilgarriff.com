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
  '/About',
  '/Contact',
  '/Copyright',
  '/Now',
  '/Portfolio',
  '/Newsletter',
  '/ReactUserFocusDemo',
];

// Css Loader
const cssLoaders = [
  {
    loader: 'css-loader',
    query: {
      importLoaders: 1,
      modules: true,
      localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
    },
  },
  'postcss',
];

module.exports = {
  devtool: 'source-map',
  entry: ['babel-polyfill', './src/index'],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name]-[chunkhash].js',
    chunkFilename: '[name]-[chunkhash].js',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: ({ resource }) => /node_modules/.test(resource),
    }),
    // Generate a 'manifest' chunk to be inlined in the HTML template
    new webpack.optimize.CommonsChunkPlugin('manifest'),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        GA_ID: JSON.stringify('UA-46649481-3'),
      },
    }),
    new CopyWebpackPlugin([
      { from: 'public/' },
    ]),
    new ExtractTextPlugin({ filename: 'bundle-[hash].css', disable: false, allChunks: true }),
    new SitemapPlugin('https://seankilgarriff.com', paths, 'sitemap.xml'),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
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
