const express = require('express');

/* require the Recipe model here */
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


/* Seach for recipes */
router.get('/recipes/search', (req, res) => {
  let { term } = req.query;
  term = new RegExp(term, 'i');

  Recipe.find({ title: term }).exec()
    .then(recipes => {
      console.log('recipes => ', recipes);
      res.render('recipes/allRecipes', { recipes, userInSession: req.session.currentUser })
    })
    .catch(err => res.render('error', {error: err}));
});

/* GET recipe details */
router.get('/recipes/:recipeId', (req, res) => {
  const { recipeId } = req.params;

  Recipe.findById(recipeId)
    .then(recipeToDisplay => {
      res.render('recipes/recipe-details', { recipe: recipeToDisplay, userInSession: req.session.currentUser });
    })
    .catch(err =>
      console.log(`Err while getting the specific recipe from the  DB: ${err}`)
    );
});


module.exports = router;
