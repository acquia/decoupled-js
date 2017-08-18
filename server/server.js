var express = require('express');
var app = express();
var path = require('path');


// set the port
var port = process.env.PORT || 3000;

// Serve build assets from the js client.
// @todo: This could be improved to serve development vs production builds.
app.use('/', express.static(path.join(__dirname, '../client/dist')));

// start the server.
app.listen(port);

module.exports = app;
