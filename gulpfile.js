'use strict';

let gulp = require('gulp');  // Base gulp package
let livereload = require('gulp-livereload'); // Livereload support for the browser

let duration = require('gulp-duration'); // Time aspects of your gulp process
let _ = require('lodash');
let runSequence = require('run-sequence');

require('./gulp'); // not assigning to a variable since there's no exported module

// Gulp task for build
gulp.task('default', ['api-doc'], function(done) {
  runSequence(['scss', 'bundle'], 'watch', function() {
    livereload.listen(); // Start livereload server

    done();
  });
});

gulp.task('build', ['build-prod']);
