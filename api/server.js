const express = require('express');

const ProjectRouter = require('../routers/projects/projects-router');
const ResourceRouter = require('../routers/resources/resources-router');
const TaskRouter = require('../routers/tasks/tasks-router');

const server = express();

server.use(express.json());

server.use('/api/projects', ProjectRouter);
server.use('/api/resources', ResourceRouter);
server.use('/api/tasks', TaskRouter);

module.exports = server;
