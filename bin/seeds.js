const mongoose = require('mongoose');
const Recipe = require('../models/Recipe.model');

require('dotenv').config();

// require database configuration
require('../configs/db.config');

// List of recipes
const recipes = [
  {
    title: 'Bahn Mi Vietnamese Sandwich',
    level: 'Amateur',
    dishType: 'Snack',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20200205-bahn-mi-delish-ehg-9647-jpg-1582818279.jpg?crop=0.676xw:0.507xh;0.308xw,0.293xh&resize=1200:*',
    ingredients: ['chicken', 'rice vinegar', 'white sugar', 'carrot', 'garlic', 'pepper', 'lime', 'mayonnaise', 'French baguette'],
    preparationTime: 15,
    cookingTime: 15,
    creator: '5f45667d4aeed029bf5bb3fd',
    isVegetarian: true,
    isVegan: false,
    description: 'Vietnamese sandwich made with chicken, beef or tofu and full of pickled vegetables.',
    instructions: `
    Place rice vinegar, water, and sugar into a saucepan over medium heat, bring to a boil, and stir until the sugar has dissolved, about 1 minute. Allow the mixture to cool.
    
    Pour the cooled vinegar mixture over the carrot, radish, and onion in a bowl, and allow to stand for at least 30 minutes. Drain off the excess vinegar mixture after the vegetables have marinated.
    
    While the vegetables are marinating, preheat the oven's broiler, and set the oven rack about 6 inches from the heat source. Lightly oil a slotted broiler pan.
    
    Sprinkle the chicken breast with garlic salt and pepper, and broil on slotted broiler pan, turning once, until the center of the chicken breast is no longer pink and the surface has browned, about 6 minutes per side. Remove the broiled chicken, and slice into bite-size pieces.
    
    Slice the baguette in half the long way, and pull the center of the bread out of the baguette halves, leaving a cavity for the filling. Place the baguette halves under the broiler to lightly toast, 2 to 3 minutes.
    
    To assemble the bahn mi sandwich, spread each half of the toasted baguette with mayonnaise, and fill the cavity of the bottom half of the bread with broiled chicken, cucumber slices, pickled carrot, onion, and radish, cilantro leaves, and jalapeno pepper. Squeeze a wedge of lime over the filling, and top with the other half of the baguette.`,
    featuredRecipe: true
  },
  {

    title: 'Banana Pancakes',
    level: 'Easy',
    dishType: 'Breakfast',
    isVegetarian: true,
    isVegan: false,
    image: 'https://www.biggerbolderbaking.com/wp-content/uploads/2020/03/banana-pancakes-WS-Thumbnail.jpg',
    preparationTime: 10,
    cookingTime: 10,
    ingredients: ['all-purpose flour', 'white sugar', 'baking powder', 'eggs', 'salt', 'milk', 'vegetable oil', 'bananas'],
    description: `Fluffy on the inside, crispy on the outside, & delicately flavored with bananas, these are phenomenal banana pancakes.`,
    instructions: `
    Combine flour, white sugar, baking powder and salt. In a separate bowl, mix together egg, milk, vegetable oil and bananas.

    Stir flour mixture into banana mixture; batter will be slightly lumpy.

    Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Cook until pancakes are golden brown on both sides; serve hot.`,
    creator: '5f45667d4aeed029bf5bb3fd',
    featuredRecipe: true,
  },
  {
    title: 'Tamarind Potato Curry',
    level: 'Professional',
    dishType: 'Main',
    image: 'https://149366112.v2.pressablecdn.com/wp-content/uploads/2019/04/heavenly-vegan-dals-tamarind-potato-curry-1.jpg',
    ingredients: ['potatoes', 'tamarind paste', 'tomatoes', 'garlic', 'ginger', 'red pepper', 'coconut sugar', 'sesame seeds', 'sugar'],
    preparationTime: 15,
    cookingTime: 15,
    creator: '5f45667d4aeed029bf5bb3fd',
    isVegetarian: true,
    isVegan: true,
    description: 'Enjoy this simple vegan tamarind potato curry for a warming family meal. It is packed with punchy flavours and low in calories.',
    instructions: `
    In a pan, place the potatoes in enough water to just cover them. Simmer the potatoes on medium-low heat until they are cooked through but don’t fall apart, 10 to 15 minutes. If you insert a knife through the potatoes and it goes through with ease, the potatoes are cooked. Drain the water and let the potatoes cool. Once cool, cut in half. 
    
    Heat the oil in a pan on high heat. Once hot, lower the heat to medium and add the asafetida, nigella and fenugreek seeds. Add the curry leaves after around 30 seconds.

    Add the tamarind curry mix as soon as the curry leaves begin to sputter. Cook while stirring for a minute or two and then add the potatoes.
    
    Stir to mix well and cook on low heat with the lid on. Cook for 10 to 12 minutes or until the potatoes are cooked through. Halfway through, add the cherry tomatoes.
    
    Garnish with some extra sesame seeds and serve hot with a lentil dish and plain white rice.`,
    featuredRecipe: true
  }
];

Recipe.create(recipes)
  .then(recipesFromDB => {
    console.log(`Created ${recipesFromDB.length} a recipe`);
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating a recipe: ${err}`));
