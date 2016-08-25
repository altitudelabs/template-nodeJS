'use strict';
let gulp = require('gulp');
let clean = require('gulp-clean');

module.exports = () => {
  return gulp.src(['dist', 'client/map' , 'client/bundle.css', 'client/bundle.js'], {read: false})
    .pipe(clean());
};
