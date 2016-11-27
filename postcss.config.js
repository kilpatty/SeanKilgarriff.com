module.exports = {
  plugins: [
    require('stylelint')({ /* your options */ }),
    require('postcss-smart-import')({}),
    // require('postcss-simple-vars')({}),
    // require('autoprefixer')({}),
    // require('css-mqpacker')({}),
    require('precss'),
    require('autoprefixer')({ /* ...options */ }),
    require('postcss-reporter')({ clearMessages: true }),
    require('cssnano'),
  ],
};
