const mongoose = require('mongoose');
const Recipe = require('../models/Recipe.model');

require('dotenv').config();

// require database configuration
require('../configs/db.config');

// List of recipes
const recipes = [
  {
    title: 'Bahn Mi',
    level: 'Easy',
    ingredients: ['milk', 'eggs', 'tomatoes'],
    dishType: 'Breakfast',
    image: 'https://images.media-allrecipes.com/userphotos/720x405/3489951.jpg',
    ingredients: ['milk', 'eggs', 'tomatoes'],
    dishType: 'Breakfast',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20200205-bahn-mi-delish-ehg-9647-jpg-1582818279.jpg?crop=0.676xw:0.507xh;0.308xw,0.293xh&resize=1200:*',
    preparationTime: 15,
    cookingTime: 30,
    creator: '5f45667d4aeed029bf5bb3fd',
    created: new Date(),
    isVegetarian: true,
    isVegan: false,
    description: 'Vietnamese sandwich made with chicken, beef or tofu and full of pickled vegetables.',
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
    featuredRecipe: true
  },
  {
    title: 'Asian Glazed Chicken Thighs',
    level: 'Professional',
    dishType: 'Other',
    isVegetarian: false,
    isVegan: false,
    image: 'https://images.media-allrecipes.com/userphotos/720x405/815964.jpg',
    description: 'Crisp edges, chewy middles, and so, so easy to make. Try this wildly-popular chocolate chip cookie recipe for yourself.',
    featuredRecipe: true
  }
];

Recipe.create(recipes)
  .then(recipesFromDB => {
    console.log(`Created ${recipesFromDB.length} a recipe`);
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating a recipe: ${err}`));
