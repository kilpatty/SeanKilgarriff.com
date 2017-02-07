/* eslint global-require: 0*/

// webpack.config.prod.js
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SitemapPlugin = require('sitemap-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const OfflinePlugin = require('offline-plugin');

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

module.exports = {
  devtool: 'source-map',
  entry: ['./src/index'],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name]-[chunkhash].js',
    chunkFilename: '[name]-[chunkhash].js',
  },
  plugins: [
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      minRatio: 0.8,
    }),
    new BrotliPlugin({
      asset: '[path].br[query]',
      minRatio: 0.8,
    }),
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
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
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
    new OfflinePlugin({
      relativePaths: false,
      publicPath: '/',
      updateStrategy: 'all',
      preferOnline: true,
      safeToUseOptionalCaches: true,
      caches: 'all',
      version: 'SPK[hash]',
      ServiceWorker: {
        navigateFallbackURL: '/',
        events: true,
      },
      AppCache: false,
    }),
    new ExtractTextPlugin({ filename: 'bundle-[hash].css', disable: false, allChunks: true }),
    new SitemapPlugin('https://seankilgarriff.com', paths, 'sitemap.xml'),
  ],
  module: {
    rules: [
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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
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
        }),
      },
    ],
  },
};
