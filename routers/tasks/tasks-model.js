const db = require('../../data/db-config');

module.exports = {
	findTasks,
	findTasksById,
	addTasks,
	update,
	remove
};

function findTasks() {
	return db('tasks');
}

function findTasksById(id) {
	return db('tasks')
		.where({ id })
		.first();
}

function addTasks(newData) {
	return db('tasks').insert(newData);
}

function update(change, id) {
	return db('tasks')
		.where({ id })
		.update(change);
}

function remove(id) {
	return db('tasks')
		.where({ id })
		.del();
}
