const express = require('express');
/* require the Recipe model here */
const Recipe = require('../models/Recipe.model');
const router = express.Router();
/* GET recipes page */
router.get('/recipes', async (req, res) => {
  let { level, dishType, isVegetarian, isVegan } = req.query;
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
    Recipe.find(filter).sort({createdAt: -1})
    .then(filteredRecipesFromDB => {
      res.render('./recipes/allRecipes', { recipes: filteredRecipesFromDB, userInSession: req.session.currentUser });
    })
    .catch(error => `Error while getting the list of recipes: ${error}`);
  } else {
    Recipe.find().sort({createdAt: -1})
    .then(recipesFromDB => {
      res.render('./recipes/allRecipes', { recipes: recipesFromDB, userInSession: req.session.currentUser });
    })
    .catch(error => `Error while getting the list of recipes: ${error}`);
  }
});
/* GET AND POST new recipe page */
router.get('/create', (req, res, next) => res.render('recipes/add-new-recipe', { userInSession: req.session.currentUser }));
router.post('/create', (req, res) => {
  let { title, level, ingredients, dishType, image, preparationTime, cookingTime, isVegetarian = false, isVegan = false, description, instructions } = req.body;
  const creator = req.session.currentUser._id;
  const errors = [];
  ingredients = ingredients;
  // duration = Number(duration);
  if(!title) {
    errors.push({ text: 'Please add a title' });
  }
  if(!ingredients) {
    errors.push({ text: 'Please add some ingredients' });
  }
  // if(!duration) {
  //   errors.push({ text: 'Please add the time' });
  //   return;
  // }
  if(!description) {
    errors.push({ text: 'Please add a description' });
  }
  if(errors.length > 0) {
    res.render('recipes/add-new-recipe', {
      errors,
      title,
      level,
      dishType,
      image,
      preparationTime,
      cookingTime,      
      ingredients,
      isVegan,
      isVegetarian,
      userInSession: req.session.currentUser
    });
  } else {
    Recipe.create({
      title,
      level,
      dishType,
      image,
      preparationTime,
      cookingTime,      
      ingredients,
      isVegetarian,
      isVegan,
      description,
      instructions,
      creator
    })
    .then(() => res.redirect('/recipes'))
    .catch(error => {console.log('error ', error);
    `Error while creating a new recipe: ${error}`});
  }
});
/* Seach for recipes */
router.get('/recipes/search', (req, res) => {
  let { term } = req.query;
  term = new RegExp(term, 'i');
  Recipe.find({ title: term }).exec()
    .then(recipes => {
      res.render('recipes/allRecipes', { recipes, userInSession: req.session.currentUser })
    })
    .catch(err => res.render('error', {error: err}));
});
/* GET recipe details */
router.get('/recipes/:recipeId', (req, res) => {
  const { recipeId } = req.params;
  Recipe.findById(recipeId)
    .then(recipe => {
      res.render('recipes/recipe-details', { recipe, userInSession: req.session.currentUser });
    })
    .catch(err =>
      console.log(`Err while getting the specific recipe from the  DB: ${err}`)
    );
});
/* Edit recipe*/
router.get('/recipes/:recipeId/edit', (req, res) => {
  const { recipeId } = req.params;
  Recipe.findById(recipeId)
    .then(recipe => {
      res.render('recipes/edit-recipe', { recipe, userInSession: req.session.currentUser, asObject: JSON.stringify(recipe) });
    })
    .catch(err =>
      console.log(`Err while getting the specific recipe from the  DB: ${err}`)
    );
});
router.post('/recipes/:recipeId/edit', (req, res) => {
  const { recipeId } = req.params;
  const {  title, level, ingredients, dishType, image, preparationTime, cookingTime, isVegetarian = false, isVegan = false, description, instructions } = req.body;
  Recipe.findByIdAndUpdate(
    recipeId,
    { title, level, ingredients, dishType, image, preparationTime, cookingTime,  isVegetarian, isVegan, description, instructions },
    { new: true }
  )
    .then(updatedRecipe => res.redirect(`/recipes/${updatedRecipe._id}`))
    .catch(error =>
      console.log(`Error while updating a single recipe: ${error}`)
    );
});
module.exports = router;