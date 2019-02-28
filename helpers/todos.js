var db = require('../models');

exports.getTodos = function(req, res){
    db.Todo.find()
    .then(function(todos){
        res.json(todos);
    })
    .catch(function(err){
        res.send(err);
    }); //we can do this because we added the promise syntax
};

exports.createTodo = function(req, res){
  db.Todo.create(req.body)
  .then(function(newTodo){
      res.status(201).json(newTodo);//status 201 means created
  })
  .catch(function(err){
      res.send(err);
  });
};

exports.getTodo = function(req, res){
   db.Todo.findById(req.params.todoId)
   .then(function(foundTodo){
       res.json(foundTodo);
   })
   .catch(function(err){
       res.send(err);
   });
};

exports.updateTodo =  function(req, res){
   db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})//new:true is required because by default the mongoose method returns what was there before the update (still updating it though)
   .then(function(todo){
       res.json(todo);
   })
   .catch(function(err){
       res.send(err);
   });
};

exports.deleteTodo = function(req, res){
   db.Todo.remove({_id: req.params.todoId}) 
   .then(function(){
       res.json({message: 'We deleted it!'});
   })
   .catch(function(err){
       res.send(err);
   });
};

module.exports = exports;