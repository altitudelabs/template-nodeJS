'use strict';
// Include gulp
let gulp = require('gulp');

// Include Our Plugins
let uglify = require('gulp-uglify');
let rename = require('gulp-rename');
let minifyHTML = require('gulp-minify-html');
let runSequence = require('run-sequence');
let sass = require('gulp-sass');
let cleanCSS = require('gulp-clean-css');

module.exports = () => {

  runSequence(['scss', 'bundle', 'api-doc'], () => {

    //minify js
    gulp.src('./client/bundle.js')
      .pipe(uglify())
      .pipe(gulp.dest('./dist'));

    //minify css
    gulp.src('./client/bundle.css')
      .pipe(cleanCSS())
      .pipe(gulp.dest('./dist'));

  });

  // minify html
  let opts = {
    spare:false,
    comments: false,
    empty: false
  };

  gulp.src('./client/**/*.html')
    .pipe(minifyHTML({quotes: true}))
    .pipe(gulp.dest('./dist'));


  // others
  gulp.src('./client/favicon.ico')
    .pipe(gulp.dest('./dist'));

};
