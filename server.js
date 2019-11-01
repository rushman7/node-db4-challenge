const express = require('express');

const recipeRouter = require('./recipes/recipes-router');

const server = express();

server.use('/api/recipes', recipeRouter);

module.exports = server;