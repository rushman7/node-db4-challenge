const express = require('express');

const recipeRouter = require('./recipes/recipes-router');

const server = express();
server.use('/api/recipes', recipeRouter);

server.get('/', (req, res) => res.status(200).send('Hello World'));

module.exports = server;