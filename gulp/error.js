'use strict';

let gutil = require('gulp-util'); // Provides gulp utilities, including logging and beep
let chalk = require('chalk'); // Allows for coloring for logging
let path = require('path');
// Error reporting function
module.exports = function mapError(err) {
  if (err.fileName) {
    // Regular error
    gutil.log(chalk.red(err.name)
    + ': ' + chalk.yellow(err.fileName.replace(__dirname + '/src/js/', ''))
      + ': ' + chalk.yellow(err.fileName.replace(path.normalize(__dirname + '/../'), ''))
      + ': ' + 'Line ' + chalk.magenta(err.lineNumber)
      + ' & ' + 'Column ' + chalk.magenta(err.columnNumber || err.column)
      + ': ' + chalk.blue(err.description));
  } else {
    // Browserify error..
    gutil.log(chalk.red(err.name)
      + ': '
      + chalk.yellow(err.message));
  }
}
