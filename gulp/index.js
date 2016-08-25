'use strict';

let gulp = require('gulp');
let fs = require('fs');
let path = require('path');

fs.readdirSync(path.normalize(__dirname + '/tasks/')).forEach(function(file) {
  gulp.task(file.substring(0, file.length-3), require('./tasks/' + file));
});
