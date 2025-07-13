// controllers/goalController.js
const Goal = require("../models/Goal");

exports.setOrUpdateGoal = async (req, res) => {
  const { calories, protein, carbs, fat } = req.body;
  const userId = req.user.id;

  try {
    let goal = await Goal.findOne({ userId });
    if (goal) {
      goal = await Goal.findOneAndUpdate(
        { userId },
        { calories, protein, carbs, fat, date: new Date() },
        { new: true }
      );
    } else {
      goal = await Goal.create({ userId, calories, protein, carbs, fat });
    }
    res.json(goal);
  } catch (err) {
    res.status(500).json({ error: "Failed to set/update goal" });
  }
};

exports.getGoal = async (req, res) => {
  try {
    const goal = await Goal.findOne({ userId: req.user.id });
    res.json(goal || {});
  } catch (err) {
    res.status(500).json({ error: "Failed to get goal" });
  }
};
