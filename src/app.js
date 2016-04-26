// look up what this means exactly
'use strict';

// initialize express
var express = require('express');

// require body parser
var parser = require('body-parser');

// imported from api directory
var router = require('./api');

// create an instance to allow for middleware we create
var app = express();

// th video on mongo set up for heroku
const port = process.env.PORT || 3000;

// require database - mongoose is a singleton, when you do it in one file, changes happen across the node process
require('./database');

// require the seed file after the database
require('./seed');

// this is serving the entire public folder at the home route
app.use('/', express.static('public'));

// use json parser method
app.use(parser.json());

// auto does the namespacing for new routes
app.use('/api', router);

// fires up the server in the browser
app.listen(port, function() {
  console.log('the server is running on port' + port);
});




