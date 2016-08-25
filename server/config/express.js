/**
* Express configuration
*/

'use strict';

let express = require('express');
let favicon = require('serve-favicon');
let compression = require('compression');
let cookieParser = require('cookie-parser');
let path = require('path');
let config = require('./environment');
let bodyParser = require('body-parser');

module.exports = (app) => {
  // view engine Setup
  app.set('views', config.root + '/server/views');
  app.set('view engine', 'jade');

  app.use(compression());
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  // app.use(passport.initialize());

  app.use(express.static(config.staticPath));
  app.use(favicon(path.join(config.staticPath, 'favicon.ico')));

  // app.use(morgan('dev'));
  // app.use(errorHandler()); // Error handler - has to be last
};
