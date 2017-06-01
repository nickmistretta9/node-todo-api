const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findByIdAndRemove('592f7a2c4b4547f60f1c2f0d').then((todo) => {
	console.log(todo);
});

Todo.findOneAndRemove({_id: '592f7a2c4b4547f60f1c2f0d'}).then((todo) => {
	console.log(todo);
});