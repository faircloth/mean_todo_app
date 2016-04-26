'use strict';

var uri =   process.env.MONGODB_URI || 'mongodb://localhost/mean-todo';
var mongoose = require('mongoose');

mongoose.connect(uri, (err) => {
  if(err) {
    console.log('Failed to connect to Mongodb through ' + uri);
  } else {
    console.log('Successfully connected to Mongo through ' + uri);
  }
});