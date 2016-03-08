/*jslint node: true */
"use strict";

/*
* On installation of this gulpfile, edit the default task. This task
* is run on startup of the docker-developer container. Further tasks
* can be run by using the command docker run dev gulp (task).
*
*/

/*
*
*
* Paths
* if extra paths are needed for the project, add them here.
*
*/
var paths = {
    scripts: {
        input: 'dev/assets/js/**/*.js',
        output: 'public/js'
    },
    styles: {
        input: 'dev/assets/styles/**/*.{scss,sass}',
        output: 'public/css'
    },
    html: {
        input: 'dev/**/*.html',
        output: 'public/'
    },
    images: {
        input: 'dev/assets/images/**/*',
        output: 'public/images'
    },
    extras: {
        input: ['dev/extras/*'],
        output: 'public/'
    }
};

/*
*
*
* Plugins
*
*
*/

//General Plugins
var gulp = require('gulp');
var gutil = require('gulp-util');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var flatten = require('gulp-flatten');

//Html Plugins
var htmlmin = require('gulp-htmlmin');
var sitemap = require('gulp-sitemap');
var htmlbuild = require('gulp-htmlbuild');

//Sass plugins
var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var bourbon = require('node-bourbon').includePaths;
var neat = require('node-neat').includePaths;


//Image Plugins
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

//Javascript Plugins
var uglify = require('gulp-uglify');

//Browsersync
var browserSync = require("browser-sync").create();


/*
* Extra Variables Go Here
*/

/*
*
* CLEAN
* Removes the dist directory -
* cleans out all files that may no longer exist in dev
*/
gulp.task('clean', function () {
    return gulp.src('public/', {read: false})
        .pipe(clean());
});

/*
*
* MOVE FILES
*
*/
//Master move task
gulp.task('move', ['move-extras']);

//Extra files - robot.txt, etc
gulp.task('move-extras', function () {
    return gulp.src(paths.extras.input)
        .pipe(gulp.dest(paths.extras.output));
});

/*
*
* HTML
* Minifies html
*/
gulp.task('html', function () {
    return gulp.src(paths.html.input)
        .pipe(htmlmin({collapseWhitespace: false, removeComments: false}))
        .pipe(gulp.dest(paths.html.output));
});

/* Task to build sitemap.*/
gulp.task('sitemap', function () {
    gulp.src(paths.html.input)
        .pipe(sitemap({
            siteUrl: 'http://www.seankilgarriff.com'
        }))
        .pipe(gulp.dest(paths.extras.output));
});

/* Task to edit html - currently adding browserSync*/
gulp.task('htmlbuild', function () {
    return gulp.src(paths.html.input)
        .pipe(htmlbuild({
            bs: function (block) {
                block.end();
            }
        }))
        .pipe(gulp.dest(paths.html.output));
});


/*
*
* SASS
*
*/
gulp.task('sass', function () {
    return gulp.src(paths.styles.input)
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: [].concat(bourbon, neat)
        }))
        .pipe(autoprefixer())
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.styles.output))
        .pipe(browserSync.reload({
            stream: true
        }));
});

/*
*
* IMAGES
*
*/
gulp.task('imagemin', function () {
    return gulp.src(paths.images.input)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(paths.images.output));
});

/*
*
* JAVASCRIPT
*
*/
gulp.task('js', function () {
    return gulp.src(paths.scripts.input)
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.scripts.output));
});

/*
*
* BROWSERSYNC AND RELOAD
*
*/
gulp.task('browser-sync', function () {
    browserSync.init({});
});

gulp.task('browser-sync-reload', function () {
    browserSync.reload();
});

/*
*
* WATCH
*
*/
gulp.task('watch', function () {

    //Watch HTML files
    gulp.watch(paths.html.input, ['html', 'browser-sync-reload']);

    //Watch Sass files
    gulp.watch(paths.styles.input, ['sass']);

    //Watch JS files
    gulp.watch(paths.scripts.input, ['js']);

    //Watch Images
    gulp.watch(paths.images.input, ['imagemin']);

});

//Default Task. - Clean, then recompile every asset on startup, then start watch
gulp.task('default', ['html', 'move', 'browser-sync', 'sass', 'imagemin', 'js', 'watch', 'sitemap']);

gulp.task('production', ['htmlbuild', 'sitemap', 'move', 'sass', 'imagemin', 'js']);
