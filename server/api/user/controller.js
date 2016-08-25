'use strict';

let User = require('./model');

// Get list of users
exports.index = (req, res) => {
  User
  .find()
  .exec((err, users) => {
    if(err) { return handleError(res, err); }
    return res.status(200).send(users);
  });
};

// Get a single user
exports.get = (req, res) => {
  console.log('get');
};

// Creates a new user in the DB.
exports.create = (req, res) => {
};

// Updates an existing user in the DB.
exports.update = (req, res) => {
};

// Deletes a user from the DB.
exports.destroy = (req, res) => {
};

function handleError(res, err) {
  return res.send(500, err);
}
