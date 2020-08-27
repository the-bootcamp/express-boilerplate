const express = require('express');

// require the Recipe model here
const Recipe = require('../models/Recipe.model');

const router = express.Router();
const Recipe = require('../models/Recipe.model');

/* GET recipes page */
router.get('/recipes', (req, res) => {
  Recipe.find()
    .then(recipesFromDB => {
      console.log(recipesFromDB);
      res.render('./recipes/allRecipes', { recipes: recipesFromDB });
    })
    .catch(error => `Error while getting the list of recipes: ${error}`);
});

module.exports = router;