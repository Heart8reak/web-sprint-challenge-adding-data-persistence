const db = require('../../data/db-config');

module.exports = {
	find,
	findById,
	addProject,
	update,
	remove
};

function find() {
	return db('projects');
}

function findById(id) {
	return db('projects')
		.where({ id })
		.first();
}

function addProject(newProject) {
	return db('projects').insert(newProject);
}

function update(change, id) {
	return db('projects')
		.where({ id })
		.update(change);
}

function remove(id) {
	return db('projects')
		.where({ id })
		.del();
}
