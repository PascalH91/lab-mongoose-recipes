const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  // TODO: write the schema
  title: String,

  level: {
    enum: ["Easy Peasy", "Amateur Chef", "UltraPro Chef"],
    default: "Easy Peasy",
    type: String
  },

  ingredients: [String],

  cuisine: { 
    type: String, 
    required: true },

  dishType: {
    enum: ["Breakfast", "Dish", "Snack", "Drink", "Dessert", "Other"]
  },

  image: {
    type: String,
    default: "https://images.media-allrecipes.com/images/75131.jpg"
  },

  duration: {
    type: Number,
    min: 0
  },

  creator: String,

  created: {
    type: Date,
    default: Date.now
  }
});

const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;
