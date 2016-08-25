'use strict';

let express = require('express');
let controller = require('./controller');
let model = require('./model');
let router = require('./router');

module.exports = {
  controller,
  model,
  router,
};
