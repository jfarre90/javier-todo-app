var mongoose = require('mongoose');
mongoose.set('debug', true); //this allows us to see what is happening at any given point
mongoose.connect('mongodb://localhost/todo-api');

mongoose.Promise = Promise; //This is just to allow us to use the promise syntax .then .catch

module.exports.Todo = require("./todo");