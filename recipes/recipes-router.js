const express = require('express');

const db = require('./recipes-model');

const router = express.Router();

router.get('/', (req, res) => {
  db.getRecipes()
    .then(recipes => res.status(200).json(recipes))
    .catch(err => res.status(500).json(err))
})

router.get('/:id/shoppingList', async (req, res) => {
  try {
    const list = await db.getShoppingList(req.params.id)

    if (list && list.length > 0) res.status(200).json(list)
    else res.status(404).json({ message: "error" })
  } catch (err) {
    console.log(err)
    res.status(404).json({ message: "db error" })
  }
})

router.get('/:id/instructions', async (req, res) => {
  try {
    const instructions = await db.getInstructions(req.params.id)

    if (instructions && instructions.length > 0) res.status(200).json(instructions)
    else res.status(404).json({ message: "error" })
  } catch (err) {
    console.log(err)
    res.status(404).json({ message: "db error" })
  }
})

module.exports = router;