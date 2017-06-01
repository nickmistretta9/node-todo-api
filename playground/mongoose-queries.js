const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '59274c3e7d26a44250f797cc11';

var userId = '5927380e7a6ec6fe44b959eb';

// if (!ObjectID.isValid(id)) {
// 	console.log('ID Not valid');
// }

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
// 	if(!todo) {
// 		return console.log('Id not found');
// 	}
// 	console.log('Todo By id', todo);
// }).catch((e) => console.log(e));

if (!ObjectID.isValid(userId)) {
	console.log('User ID not valid');
}

User.findById(userId).then((user) => {
	if(!user) {
		return console.log('User not found');
	}
	console.log('User by id', user);
}).catch((e) => console.log(e));