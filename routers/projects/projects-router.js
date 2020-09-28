const express = require('express');
const projectsModel = require('./projects-model');

const Projects = require('./projects-model');

const router = express.Router();

router.get('/', (req, res) => {
	Projects.find()
		.then(projectList => {
			res.status(200).json({ message: 'Success', projectList });
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed' });
		});
});

router.get('/:id', (req, res) => {
	const { id } = req.params;
	Projects.findById(id)
		.then(project => {
			res.status(200).json({ message: 'Success', project });
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed try again', err });
		});
});

router.post('/', (req, res) => {
	const newProject = req.body;
	Projects.addProject(newProject)
		.then(project => {
			res.status(201).json({ message: 'Success created new project', project });
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed in createing a new project' }, err);
		});
});

router.put('/:id', (req, res) => {
	const { id } = req.params;
	const changes = req.body;
	Projects.findById(id)
		.then(project => {
			if (project) {
				projectsModel.update(changes, id).then(updatedProject => {
					res.status(202).json({ message: 'success in updating', updatedProject });
				});
			} else {
				res.status(404).json({ message: 'Failed to update' });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Database Error' }, err);
		});
});

router.delete('/:id', (req, res) => {
	const { id } = req.params;
	Projects.remove(id)
		.then(deleted => {
			if (deleted) {
				res.status(200).json({ message: 'success in deleting' });
			} else {
				res.status(404).json({ message: 'Could not be deleted' });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed', err });
		});
});

module.exports = router;
