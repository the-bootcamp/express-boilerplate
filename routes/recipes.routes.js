const express = require('express');

// require the Recipe model here
const Recipe = require('../models/Recipe.model');

const router = express.Router();

/* GET recipes page */
router.get('/recipes', (req, res) => {
  Recipe.find()
    .then(recipesFromDB => {
      console.log(recipesFromDB);
      res.render('./recipes/allRecipes', { recipes: recipesFromDB, userInSession: req.session.currentUser });
    })
    .catch(error => `Error while getting the list of recipes: ${error}`);
});

/* GET new recipe page */

router.get('/create', (req, res, next) => res.render('recipes/add-new-recipe', { userInSession: req.session.currentUser }));

router.post('/create', (req, res) => {
  const { title, level, ingredient, dishType, duration, isVegetarian, isVegan, description } = req.body;
  const creator = req.session.currentUser._id;
  
  Recipe.create({ title, level, dishType, ingredient, duration, isVegetarian, isVegan, description, creator })
    .then(() => res.redirect('/recipes'))
    .catch(error => `Error while creating a new recipe: ${error}`);
});

/* GET recipe details */
router.get('/recipes/:recipeId', (req, res) => {
  const { recipeId } = req.params;

  Recipe.findById(recipeId)
    .then(recipeToDisplay => {
      res.render('recipes/recipe-details', { recipeToDisplay, userInSession: req.session.currentUser });
    })
    .catch(err =>
      console.log(`Err while getting the specific recipe from the  DB: ${err}`)
    );
});

module.exports = router;
