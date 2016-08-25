'use strict';

// Server port
let path = require('path');

module.exports = {
  staticPath: path.normalize(__dirname + '/../../../client'),
  // MongoDB connection options
  port: 3001,
  mongo: {
    uri: 'mongodb://localhost/testDB',
    options: {
      db: {
        safe: true
      }
    }
  }
};
