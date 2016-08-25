'use strict';

let mongoose = require('mongoose');
let config = require('../config/environment');
let fs = require('fs');
let express = require('express');
let path = require('path');

module.exports = function(app) {
  // Connect to database
  mongoose.connect(config.mongo.uri, config.mongo.options);

  app.use('/api', createApiRouter()); // all route goes under api
};

function createApiRouter() {
  let apiRouter = express.Router();
  let moduleRouter;

  fs.readdirSync(__dirname).forEach(function(file) { // synchronous to ensure all route registration before returning the router
    if (file.indexOf('.') === -1) {
      moduleRouter = require('./' + file).router;
      apiRouter.use('/' + file, moduleRouter);  // register all module router under its name
    }
  });

  apiRouter.get('/doc', function(req, res) {
    res.sendFile(__dirname + '/doc.html');
  });

  return apiRouter;
};
