'use strict';

function DataService ($http, $q) {
  
  var url = "https://stormy-bayou-72719.herokuapp.com/";

  this.getTodos = function(cb) {
    $http.get(url + 'api/todos').then(cb);
  };
  
  this.deleteTodo = function(todo) {
    console.log("I deleted the " + todo.name + " todo!");
    $http.delete(url + 'api/todos/' + todo._id);
  };
  
  this.saveTodos = function(todos) {
    var queue = [];

    todos.forEach(function(todo) {
      var request;
      if(!todo._id) {
        request = $http.post(url + 'api/todos', todo);
      } else {
        request = $http.put(url + 'api/todos/' + todo._id, todo).then( (results) => {
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
