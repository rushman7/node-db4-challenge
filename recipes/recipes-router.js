const express = require('express');

const db = require('./recipes-model');

const router = express.Router();

router.get('/', (req, res) => {
  db.getRecipes()
    .then(recipes => res.status(200).json(recipes))
    .catch(err => res.status(500).json(err))
})

module.exports = router;