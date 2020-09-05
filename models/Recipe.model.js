const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const recipeSchema = new Schema(
  {
    title: String,
    level: {type: String, enum: ['Easy', 'Amateur', 'Professional']},
    ingredients: [String],
    dishType: {type: String, enum: ['breakfast', 'starter', 'main_course', 'soup', 'snack', 'shake', 'dessert', 'beverage','other']},
    image: {type: String, default: ''},
    duration: {type: Number, min: 0},
    creator: String,
    // date: {
    //   "type": "string",
    //   "format": "date"
    // },
    created: {
      "type": "string",
      "format": "date",
      "description": "We expect yyyy-MM-dd"
    },
    // created: {type: Date, default: Date.now},
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
