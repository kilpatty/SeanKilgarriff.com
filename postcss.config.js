module.exports = {
  plugins: [
    require('postcss-smart-import')({}),
    require('postcss-simple-vars')({}),
    require('autoprefixer')({}),
    require('css-mqpacker')({}),
  ],
};
