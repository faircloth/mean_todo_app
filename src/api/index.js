// node runs file with strict interpretation
'use strict';

var express = require('express');

// establish a router - runs like an app
var router = express.Router();

// capital letter for class, constructor or model
var Todo = require('../models/todo');

// import mock data
// var todos = require('../../mock/todos.json');

// first route - use api as to not conflict with routes we got in public
// can do '/api/todos' on the app.get method to namespace the routes, but an easier way is a router:
// router - works like an app - run the get method on it

router.get('/todos', (req, res) => {
  // .json is an alternative to the send method on the res object
  
  Todo.find({}, function(err, todos) {
    if (err) {
      return res.status(500).json({message: err.message});
    } 
    else {
      res.json({todos: todos});
    }
  });
});

// TODO: Add POST route to create new entries
router.post('/todos', (req, res) => {
  var todo = req.body;
  Todo.create(todo, function(err, todo) {
    if (err) {
      // return causes it to end
      return res.status(500).json({err: err.message});
    }
    res.json({'todo': todo, message: 'Todo created'});
    // npm install body-parser --save -E gives us the json method
    // res.send(todo);
  });
});

// TODO: Add PUT route to update existing entries
router.put('/todos/:id', (req, res) => {
  var id = req.params.id;
  var todo = req.body;

  if (todo && todo._id !== id) {
    return res.status(500).json({err: "Ids don't match!"});
  }
  
  // option changes default of false to true to return new data
  Todo.findByIdAndUpdate(id, todo, {new: true}, function(err, todo) {
    if (err) {
      // return causes it to end
      return res.status(500).json({err: err.message});
    }
    res.json({'todo': todo, message: 'Todo updated'});
  });
});

// TODO: Add DELETE route to delete entries
router.delete('/todos/:id', (req, res) => {
  var id = req.params.id;
  var todo = req.body;

  Todo.findByIdAndRemove(id, function(err, todo) {

    if (err) {
      return res.status(500).json({err: err.message});
    } else {
      res.json({message: todo.name + 'has been deleted message from API!'});
    }

  });

});

// export the router
module.exports = router;
