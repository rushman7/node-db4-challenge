const express = require('express');

const db = require('./recipes-model');

const router = express.Router();

router.get('/recipes', (req, res) => {
  db.getRecipes()
    .then(recipes => res.status(200).json(recipes))
    .catch(err => res.status(500).json(err))
})

router.get('/shop-list/:id', (req, res) => {
  db.getShoppingList(req.params.id)
    .then(recipes => res.status(200).json(recipes))
    .catch(err => res.status(500).json(err))
})

router.get('/instructions/:id', (req, res) => {
  console.log(req.params.id)
  db.getInstructions(req.params.id)
    .then(recipes => res.status(200).json(recipes))
    .catch(err => res.status(500).json(err))
})

module.exports = router;