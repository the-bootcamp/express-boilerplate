const express = require('express');

/* require the Recipe model here */
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

/* GET AND POST new recipe page */

router.get('/create', (req, res, next) => res.render('recipes/add-new-recipe', { userInSession: req.session.currentUser }));

router.post('/create', (req, res) => {
  const { title, level, ingredients, dishType, duration, isVegetarian, isVegan, description } = req.body;
  const creator = req.session.currentUser._id;
  const errors = [];
  
  if(!title) {
    errors.push({ text: 'Please add a title' });
  }
  if(!ingredients) {
    errors.push({ text: 'Please add some ingredients' });
  }
  if(!duration) {
    errors.push({ text: 'Please add the time' });
  }
  if(!description) {
    errors.push({ text: 'Please add a description' });
  }
  if(errors.length > 0) {
    res.render('recipes/add-new-recipe', {
      errors,
      title, 
      ingredients, 
      duration, 
      description, 
      level,
      dishType,
      isVegan,
      isVegetarian,
      userInSession: req.session.currentUser
    });
  } else {
    ingredients = ingredients.toLowerCase();

    Recipe.create({ title, level, dishType, ingredients, duration, isVegetarian, isVegan, description, creator })
      .then(() => res.redirect('/recipes'))
      .catch(error => `Error while creating a new recipe: ${error}`);
  }
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
