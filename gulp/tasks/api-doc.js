'use strict';
const gulp = require('gulp');
const aglio = require('gulp-aglio');

module.exports = () => {
  return gulp.src(['server/api/doc.apib'])
    .pipe(aglio({ themeTemplate: 'triple' }))
    .pipe(gulp.dest('server/api'));
};
