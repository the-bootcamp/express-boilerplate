const express = require('express');

// require the Recipe model here
const Recipe = require('../models/Recipe.model');

const router = express.Router();

/* GET recipes page */
router.get('/recipes', (req, res) => {
  console.log('req', req.query)
  let { level, dishType, isVegetarian, isVegan } = req.query;
    console.log('veg ', isVegetarian)
  if (level || dishType || isVegetarian || isVegan) {
    const filter = {};
    if (level) {
      filter.level = level;
    }
    if (dishType) {
      filter.dishType = dishType;
    }
    if (isVegetarian) {
      filter.isVegetarian = isVegetarian;
    }
    if (isVegan) {
      filter.isVegan = isVegan;
    }


    Recipe.find(filter)
    .then(filteredRecipesFromDB => {
      console.log(filteredRecipesFromDB);
      res.render('./recipes/allRecipes', { recipes: filteredRecipesFromDB, userInSession: req.session.currentUser });
    })
    .catch(error => `Error while getting the list of recipes: ${error}`);    
  } else {
    Recipe.find()
    .then(recipesFromDB => {
      res.render('./recipes/allRecipes', { recipes: recipesFromDB, userInSession: req.session.currentUser });
    })
    .catch(error => `Error while getting the list of recipes: ${error}`);
  }
});

/* GET new recipe page */

router.get('/create', (req, res, next) => res.render('recipes/add-new-recipe', { userInSession: req.session.currentUser }));

router.post('/create', (req, res) => {
  const { title, level, ingredients, dishType, duration, isVegetarian, isVegan, description } = req.body;

  Recipe.create({ title, level, dishType, ingredient, duration, isVegetarian, isVegan, description })
    .then(() => res.redirect('/recipes'))
    .catch(error => `Error while creating a new recipe: ${error}`);
});

/* GET recipe details */
router.get('/recipes/:recipeId', (req, res) => {
  const { recipeId } = req.params;
console.log(recipeId)
  Recipe.findById(recipeId)
    .then(recipeToDisplay => {
      console.log('this' + recipeToDisplay)
      res.render('recipes/recipe-details', { recipeToDisplay, userInSession: req.session.currentUser });
    })
    .catch(err =>
      console.log(`Err while getting the specific recipe from the  DB: ${err}`)
    );
});

module.exports = router;
