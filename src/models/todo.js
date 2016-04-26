'use strict';

var mongoose = require('mongoose');

// todo.name
// todo.completed

// create a new schema
var todoSchema = new mongoose.Schema({
  name:      String,
  completed: Boolean
});

// create a model using your schema
var model = mongoose.model('Todo', todoSchema);

// export the model - best practice for advanced configuration
module.exports = model;