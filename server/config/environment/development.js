'use strict';

// Development specific configuration
// ==================================
let path = require('path');

module.exports = {
  // MongoDB connection options
  staticPath: path.normalize(__dirname + '/../../../client')
};
