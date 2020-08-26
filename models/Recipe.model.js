const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const recipeSchema = new Schema(
  {
    title: String,
    level: {String, enum: ['Easy', 'Amateur', 'Professional']},
    ingredients: [String],
    dishType: {String, enum: ['breakfast', 'starter', 'main_course', 'soup', 'snack', 'shake', 'dessert', 'other']},
    image: {type: String, default: ''},
    duration: {type: Number, min: 0},
    creator: String,
    created: {type: Date, default: Date.now},
    isVegetarian: Boolean,
    isVegan: Boolean,
    description: String,
    premiumContent: String
  },
  {
    timestamps: true
  }
);

module.exports = model('Recipe', recipeSchema);
