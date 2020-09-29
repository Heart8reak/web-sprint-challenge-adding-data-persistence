// require('dotenv').config();
const express = require('express');
const cors = require('cors');

const ProjectRouter = require('../routers/projects/projects-router');
const ResourceRouter = require('../routers/resources/resources-router');
const TaskRouter = require('../routers/tasks/tasks-router');

const server = express();

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
	res.send(`<h2>The Backend is up and running!</h2>`);
});

server.use('/api/projects', ProjectRouter);
server.use('/api/resources', ResourceRouter);
server.use('/api/tasks', TaskRouter);

module.exports = server;
