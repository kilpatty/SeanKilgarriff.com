module.exports = {
  plugins: [
    require('postcss-smart-import')({ /* ...options */ }),
    require('postcss-simple-vars')({ /* ...options */ }),
    // require('precss')({ /* ...options */ }),
    // require('autoprefixer')({ /* ...options */ }),
  ],
};


// module.exports = (ctx) =>
//    ({
//      map: ctx.env === 'development' ? 'inline' : false,
//    // ctx.env === process.env.NODE_ENV === 'development' (default)
//      plugins: [
//         // require('postcss-smart-import')(),
//        require('postcss-simple-vars')({ /* ...options */ }),
//         // require('postcss-url')(),
//         // require('postcss-mixins')()
//         // require('postcss-cssnext')(),
//         // require('postcss-inline-comment')()
//      ],
//    })
// ;
