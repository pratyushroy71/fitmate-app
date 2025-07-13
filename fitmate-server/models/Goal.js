// models/Goal.js
const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  calories: { type: Number, default: 2000 },
  protein: { type: Number, default: 150 },
  carbs: { type: Number, default: 250 },
  fat: { type: Number, default: 70 },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Goal", goalSchema);
