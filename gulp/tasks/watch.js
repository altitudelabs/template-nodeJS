'use strict';
let gulp = require('gulp');
let runSequence = require('run-sequence');
let livereload = require('gulp-livereload'); // Livereload support for the browser

module.exports = () => {
  // js
  gulp.watch(['./client/main.js', './client/components/**/*.js', './client/**/*.html'], () => {
    runSequence('clean', 'bundle', () => {
      gulp.src('./')
      .pipe(livereload()); // Reload the view in the browser
    });
  });

  //scss
  gulp.watch(['./client/**/*.scss'], () => {
    runSequence('scss', () => {
      gulp.src('./')
      .pipe(livereload()); // Reload the view in the browser
    });
  });
  
  //api doc
  gulp.watch(['./server/api/**/*.apib'], ['api-doc']);

};
