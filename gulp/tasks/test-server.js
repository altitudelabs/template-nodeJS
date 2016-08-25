'use strict';

let gulp = require('gulp');
let mocha = require('gulp-spawn-mocha');
let config = require('../../server/config/environment');
const path = config.root + '/server/**/*.spec.js';

let task = () => {
  gulp.src(path, {read: false})
    .pipe(mocha({
      reporter: 'spec',
      env: { 'NODE_ENV' : 'test' },
      timeout: 15000
    }))
    .on('error', () => {}); // Ignore assertion errors from mocha
}

module.exports = () => {
  task();
  gulp.watch('**/*.js', {cwd: './server'}, task);
}
