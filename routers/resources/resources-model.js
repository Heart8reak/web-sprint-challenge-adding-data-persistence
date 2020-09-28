const db = require('../../data/db-config');

module.exports = {
	findResources,
	findResourcesById,
	addResources,
	update,
	remove
};

function findResources() {
	return db('resources');
}

function findResourcesById(iid) {
	return db('resources')
		.where({ id })
		.first();
}

function addResources(newData) {
	return db('resources').insert(newData);
}

function update(change, id) {
	return db('resources')
		.where({ id })
		.update(change);
}

function remove(id) {
	return db('resources')
		.where({ id })
		.del();
}
