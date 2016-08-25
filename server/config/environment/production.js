'use strict';

// Production specific configuration
// ==================================
let path = require('path');

module.exports = {
  // MongoDB connection options
  staticPath: path.normalize(__dirname + '/../../../dist')
};
