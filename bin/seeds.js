const mongoose = require('mongoose');
const Recipe = require('../models/Recipe.model');

// require database configuration
require('../configs/db.config');

require('dotenv').config();

// List of recipes
const recipes = [
  { 
    title: 'Bahn Mi', 
    image: 'https://images.media-allrecipes.com/userphotos/720x405/3489951.jpg', 
    description: 'Vietnamese sandwich made with chicken, beef or tofu and full of pickled vegetables.'
  },
  { 
    title: 'Chocolate Chip Cookies', 
    image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4398987.jpg&w=596&h=399.32000000000005&c=sc&poi=face&q=85', 
    description: 'Crisp edges, chewy middles, and so, so easy to make. Try this wildly-popular chocolate chip cookie recipe for yourself.'
  }
];

Recipe.create(recipes)
  .then(recipesFromDB => {
    console.log(`Created ${recipesFromDB.length} a recipe`);
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating a recipe: ${err}`));