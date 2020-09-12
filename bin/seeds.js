const mongoose = require('mongoose');
const Recipe = require('../models/Recipe.model');

require('dotenv').config();

// require database configuration
require('../configs/db.config');

// List of recipes
const recipes = [
  {
    title: 'Bahn Mi Vietname Sandwich',
    level: 'Easy',
    dishType: 'Breakfast',
    image: 'https://images.media-allrecipes.com/userphotos/720x405/3489951.jpg',
    ingredients: ['milk', 'eggs', 'tomatoes'],
    preparationTime: 15,
    cookingTime: 30,
    creator: '5f45667d4aeed029bf5bb3fd',
    isVegetarian: true,
    isVegan: false,
    description: 'Vietnamese sandwich made with chicken, beef or tofu and full of pickled vegetables.',
    instructions: '',
    featuredRecipe: true
  },
  {

    title: 'Chocolate Chip Cookies',
    level: 'Amateur',
    dishType: 'Soup',
    isVegetarian: true,
    isVegan: true,
    image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4398987.jpg&w=596&h=399.32000000000005&c=sc&poi=face&q=85',
    description: 'Crisp edges, chewy middles, and so, so easy to make. Try this wildly-popular chocolate chip cookie recipe for yourself.',
    featuredRecipe: true,
    preparationTime: 15,
    ingredients: ['milk', 'eggs', 'tomatoes'],
    cookingTime: 30,
    instructions: '',
    creator: '5f45667d4aeed029bf5bb3fd'
  },
  {
    title: 'Asian Glazed Chicken Thighs',
    level: 'Professional',
    dishType: 'Other',
    isVegetarian: false,
    isVegan: false,
    image: 'https://images.media-allrecipes.com/userphotos/720x405/815964.jpg',
    description: 'Crisp edges, chewy middles, and so, so easy to make. Try this wildly-popular chocolate chip cookie recipe for yourself.',
    featuredRecipe: true,
    preparationTime: 15,
    cookingTime: 30,
    instructions: '',
    creator: '5f43667d4aeed029bf5bb3fd',
    ingredients: ['milk', 'eggs', 'tomatoes'],
  }
];

Recipe.create(recipes)
  .then(recipesFromDB => {
    console.log(`Created ${recipesFromDB.length} a recipe`);
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating a recipe: ${err}`));
