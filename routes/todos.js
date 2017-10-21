const express = require('express');
const router = express.Router();

const Todo = require('../models/todo');


// Add
router.post('/', (req, res, next) => {
	let newItem = new Todo({
		item: req.body.item
	});

	Todo.add(newItem, (err, data) => {
		if (err) {
			res.json({
				status: false,
				message: 'There was some error. ' + err
			});
		} else {
			res.json({
				status: true,
				data: data
			});
		}
	});

});

// Get all
router.get('/', (req, res, next) => {
	Todo.getAll((err, data) => {
		if (err) {
			res.json({
				status: false,
				message: 'There was some error. ' + err
			});
		} else {
			res.json({
				status: true,
				data: data
			});
		}
	});
});

// Delete
router.delete('/:id', (req, res, next) => {
	Todo.delete(req.params.id, (err, data) => {
		if (err) {
			res.json({
				status: false,
				message: 'There was some error. ' + err
			});
		} else {
			res.json({
				status: true,
				data: data
			});
		}
	});
});

module.exports = router;
