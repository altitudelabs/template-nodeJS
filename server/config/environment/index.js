'use strict';

let path = require('path');
let _ = require('lodash');

//setting environment letiables mannually if they are not already set via bash profile
if (process.env.NODE_ENV === undefined) {
  require('./default-env');
}

// All configurations will extend these options.
// Will represent production env unless overwritten
// ============================================
let defaultConfig = {
  env: process.env.NODE_ENV,

  // Root path of server
  root: path.normalize(__dirname + '/../../..'),
  staticPath: path.normalize(__dirname + '/../../../dist'),

  // Server port
  port: process.env.PORT || 9000,

  // Secret for session, you will want to change this and make it an environment letiable
  secrets: {
    session: process.env.LYNK_SECRET_SESSION || 'instant pig'
  },

  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/defaultDB',
    options: {
      db: {
        safe: true
      }
    }
  },

  facebook: {
    clientID:     process.env.FACEBOOK_ID,
    clientSecret: process.env.FACEBOOK_SECRET,
    callbackURL:  process.env.DOMAIN,
  },
};

// merge defaultconfig with environment specific config
defaultConfig = _.merge(defaultConfig, require('./' + process.env.NODE_ENV + '.js') || {});

module.exports = defaultConfig;
