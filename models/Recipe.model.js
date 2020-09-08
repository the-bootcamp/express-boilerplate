const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const recipeSchema = new Schema(
  {
    title: String,
    level: {type: String, enum: ['Easy', 'Amateur', 'Professional']},
    ingredients: [String],
    dishType: {type: String, enum: ['Breakfast', 'Starter', 'Main', 'Soup', 'Snack', 'Shake', 'Dessert', 'Beverage', 'Other']},
    image: {type: String, default: ''},
    preparationTime: {type: Number, min: 0},
    cookingTime: {type: Number, min: 0},
    creator: String,
    created: {type: Date, default: Date.now},
    isVegetarian: Boolean,
    isVegan: Boolean,
    description: String,
    premiumContent: String,
    featuredRecipe: Boolean
    //image:
  },
  {
    timestamps: true
  }
);

module.exports = model('Recipe', recipeSchema);
