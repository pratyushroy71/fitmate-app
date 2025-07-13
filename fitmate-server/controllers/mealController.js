const Meal = require("../models/Meal");

exports.addMeal = async (req, res) => {
  try {
    const userId = req.user.id;

    console.log("📦 Meal data received:", req.body);
    console.log("👤 User ID:", userId);

    const {
      imageUrl,
      mealType,
      description,
      weight,
      calories,
      protein,
      carbs,
      fat,
      fiber,
      sugar,
      sodium,
    } = req.body;

    const meal = new Meal({
      user: userId,
      imageUrl,
      mealType,
      description,
      weight,
      calories,
      protein,
      carbs,
      fat,
      fiber,
      sugar,
      sodium,
    });

    await meal.save();
    res.status(201).json(meal);
  } catch (err) {
    console.error("❌ Add Meal Error:", err);
    res.status(500).json({ error: "Server error while saving meal" });
  }
};

exports.getMeals = async (req, res) => {
  try {
    const meals = await Meal.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(meals);
  } catch (err) {
    console.error("Fetch Meals Error:", err);
    res.status(500).json({ error: "Server error while fetching meals" });
  }
};
