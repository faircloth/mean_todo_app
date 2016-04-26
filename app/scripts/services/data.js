'use strict';

function DataService ($http, $q) {
  this.getTodos = function(cb) {
    $http.get('/api/todos').then(cb);
  };
  
  this.deleteTodo = function(todo) {
    console.log("I deleted the " + todo.name + " todo!");
    $http.delete('/api/todos/' + todo._id);
  };
  
  this.saveTodos = function(todos) {
    var queue = [];

    todos.forEach(function(todo) {
      var request;
      if(!todo._id) {
        request = $http.post('/api/todos', todo);
      } else {
        request = $http.put('/api/todos/' + todo._id, todo).then( (results) => {
          todo = results.data.todo;
          return todo;
        });
      };
      queue.push(request);
    });

    return $q.all(queue).then( (results) => {
      console.log("I saved " + todos.length + " todos!");
    });

  };
  
};

module.exports = DataService;
