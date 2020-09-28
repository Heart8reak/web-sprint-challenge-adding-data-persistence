const express = require('express');

const Resources = require('./resources-model');

const router = express.Router();

router.get('/', (req, res) => {
	Resources.findResources()
		.then(resourceList => {
			res.status(200).json({ message: 'Success', resourceList });
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed try again', err });
		});
});

router.get('/:id', (req, res) => {
	const { id } = req.params;
	Resources.findResourcesById(id)
		.then(resource => {
			res.status(200).json({ message: 'Success', resource });
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed ', err });
		});
});

router.post('/', (req, res) => {
	const newData = req.body;
	Resources.addResources(newData)
		.then(resource => {
			res.status(201).json({ message: 'Success in creating a new resource', newData });
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to create', err });
		});
});

router.put('/:id', (req, res) => {
	const { id } = req.params;
	const changes = req.body;
	Resources.findResourcesById(id)
		.then(resource => {
			if (resource) {
				Resources.update(changes, id).then(updatedResource => {
					res.status(202).json({ message: 'Success in updating', updatedResource });
				});
			} else {
				res.status(404).json({ message: 'Could not updated' });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Error with the Database', err });
		});
});

router.delete('/:id', (req, res) => {
	const { id } = req.params;
	Resources.remove(id)
		.then(deleted => {
			if (deleted) {
				res.status(200).json({ message: 'seccues in deleting' });
			} else {
				res.status(404).json({ message: 'could not be deleted' });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Error with the database', err });
		});
});

module.exports = router;
