/**
* Main Express Application File
*/
'use strict';

// Set default node environment to development
// process.env.NODE_ENV = process.env.NODE_ENV || 'development';
let express = require('express');
let config = require('./config/environment');

// Setup server
let app = express();

require('./config/express')(app);
require('./routes')(app); // web view routes
require('./api')(app); // api

// All other request results in 404
app.use((req, res) => {
  res.status(404).render(404);
});

let server = require('http').createServer(app);

// Start server
server.listen(config.port, config.ip, () => {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});


// Expose app
exports = module.exports = app;
