'use strict';

let gulp = require('gulp');
let Server = require('karma').Server;
let config = require('../../server/config/environment');

module.exports = (done) => {
  new Server({
    configFile: config.root + '/karma.conf.js'
  }, done).start();
};
