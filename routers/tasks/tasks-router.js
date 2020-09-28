const express = require('express');

const Tasks = require('./tasks-model');

const router = express.Router();

router.get('/', (req, res) => {
	Tasks.findTasks()
		.then(taskList => {
			res.status(200).json({ message: 'Success', taskList });
		})
		.catch(err => {
			res.status(500).json({ message: 'Error with Database', err });
		});
});

router.get('/:id', (req, res) => {
	const { id } = req.params;
	Tasks.findTasksById(id)
		.then(task => {
			res.status(200).json({ message: 'Success', task });
		})
		.catch(err => {
			res.status(500).json({ message: 'Error with the Database' });
		});
});

router.post('/', (req, res) => {
	const taskData = req.body;
	Tasks.addTasks(taskData)
		.then(task => {
			res.status(201).json({ message: 'Success in creating new task', task });
		})
		.catch(err => {
			res.status(500).json({ message: 'Error with databse', err });
		});
});

router.put('/:id', (req, res) => {
	const { id } = req.params;
	const changes = req.body;
	Tasks.findTasksById(id)
		.then(task => {
			if (task) {
				Tasks.update(changes, id).then(updatedTask => {
					res.status(202).json({ message: 'Success in updating', updatedTask });
				});
			} else {
				res.status(404).jsoon({ message: 'Failed tp update' });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Database Error', err });
		});
});

router.delete('/:id', (req, res) => {
	const { id } = req.params;
	Tasks.remove(id)
		.then(deleted => {
			if (deleted) {
				res.status(200).json({ message: 'Success in deleting' });
			} else {
				res.status(404).json({ message: 'Could not be deleted' });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed', err });
		});
});

module.exports = router;
