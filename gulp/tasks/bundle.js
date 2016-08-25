'use strict';
let gulp = require('gulp');
let duration = require('gulp-duration'); // Time aspects of your gulp process
let mapError = require('../error');
let browserify = require('browserify'); // Providers "require" support, CommonJS
let babelify = require('babelify'); // Used to convert ES6 & JSX to ES5
let source = require('vinyl-source-stream'); // Vinyl stream support
let buffer = require('vinyl-buffer'); // Vinyl stream support
let sourcemaps = require('gulp-sourcemaps'); // Provide external sourcemap files
let rename = require('gulp-rename'); // Rename sources
let notify = require('gulp-notify'); // Provides notification to both the console and Growel
let uglify = require('gulp-uglify');

module.exports = () => {
  const bundleTimer = duration('Javascript bundle time');
  const browserifyOpts = {
    cache: {},
    packageCache: {},
    debug: true
  };

  return browserify('./client/main.js', browserifyOpts) // Browserify
    .transform(babelify, {presets: ['es2015']}) // Babel tranforms
    .bundle()
    .on('error', mapError) // Map error reporting
    .pipe(source('main.js')) // Set source name
    .pipe(buffer()) // Convert to gulp pipeline
    .pipe(rename('bundle.js')) // Rename the output file
    .pipe(sourcemaps.init({loadMaps: true})) // Extract the inline sourcemaps
    .pipe(sourcemaps.write('./map')) // Set folder for sourcemaps to output to
    .pipe(gulp.dest('./client/')) // Set the output folder
    .pipe(notify({
      message: 'Generated file: <%= file.relative %>',
    })) // Output the file being created
    .pipe(bundleTimer); // Output time timing of the file creation
};
