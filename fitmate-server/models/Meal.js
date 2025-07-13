const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    imageUrl: String,
    mealType: { type: String, enum: ["breakfast", "lunch", "dinner", "snack"], required: true },
    description: String,
    weight: Number,
    calories: Number,
    protein: Number,
    carbs: Number,
    fat: Number,
    fiber: Number,
    sugar: Number,
    sodium: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Meal", mealSchema);
