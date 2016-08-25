'use strict';
let gulp = require('gulp');
let sass = require('gulp-sass');
let livereload = require('gulp-livereload');
let notify = require('gulp-notify'); // Provides notification to both the console and Growel
let sourcemaps = require('gulp-sourcemaps');
let sassGlob = require('gulp-sass-glob'); // So that you can do import components/**/*.scss in main.scss
let rename = require('gulp-rename');

module.exports = () => {
  return gulp.src('./client/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('bundle.css'))
    .pipe(sourcemaps.write('./map'))
    .pipe(gulp.dest('./client'))
    .pipe(notify({
      message: 'Generated file: <%= file.relative %>',
    }));
};
