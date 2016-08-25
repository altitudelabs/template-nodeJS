'use strict';

let express = require('express');
let controller = require('./controller');
let model = require('./model');

let router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.get);

module.exports = router;
