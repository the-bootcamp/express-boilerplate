const express = require('express');
const router = express.Router();

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