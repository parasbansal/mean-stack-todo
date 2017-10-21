const mongoose = require('mongoose');

// Todo Schema
const TodoSchema = mongoose.Schema({
	item: {
		type: String,
		required: true
	},
	completed: {
		type: Boolean,
		required: true,
		default: false
	},
	updated_at: {
		type: Date,
		required: true,
		default: Date.now
	}
});

const Todo = module.exports = mongoose.model('Todo', TodoSchema);

// get all
module.exports.getAll = function (callback) {
	Todo.find({}).sort("-updated_at").exec(callback);
}

// Add item
module.exports.add = function (newItem, callback) {
	newItem.save(callback);
}

// edit item
module.exports.edit = function (id, newItem, callback) {
	Todo.findByIdAndUpdate(id, newItem, callback);
}

// delete
module.exports.delete = function (id, callback) {
	Todo.findByIdAndRemove(id).exec(callback);
}


// set completed
module.exports.setCompleted = function (id, callback) {
	Todo.findByIdAndUpdate(id, { $set: { completed: true } }, callback);
}