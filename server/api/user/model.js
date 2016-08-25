'use strict';

let mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let UserSchema = new Schema({
  name: String,
  email: String
});

module.exports = mongoose.model('User', UserSchema);
