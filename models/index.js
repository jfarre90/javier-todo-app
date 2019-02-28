var mongoose = require('mongoose');
mongoose.set('debug', true); //this allows us to see what is happening at any given point
mongoose.connect(process.env.DATABASEURL || 'mongodb://localhost/todo-api', {useNewUrlParser: true});

mongoose.Promise = Promise; //This is just to allow us to use the promise syntax .then .catch

module.exports.Todo = require("./todo");