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

var port = process.env.PORT || 5000;

// require database - mongoose is a singleton, when you do it in one file, changes happen across the node process
require('./database');

// require the seed file after the database
require('./seed');

// allow access from front-end
app.use( (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  next();
});

// this is serving the entire public folder at the home route
app.use('/', express.static('public'));

// use json parser method
app.use(parser.json());

// auto does the namespacing for new routes
app.use('/api', router);

app.listen(port);
  





