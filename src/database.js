'use strict';

var mongoose = require('mongoose');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/mean-todo', (err) => {
  if(err) {
    console.log('Failed to connect to Mongodb!');
  } else {
    console.log('Successfully connected to Mongo!');
  }
});