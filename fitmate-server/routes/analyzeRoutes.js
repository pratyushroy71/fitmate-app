// routes/analyzeRoutes.js
const express = require("express");
const axios = require("axios");
const requireAuth = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/analyze", requireAuth, async (req, res) => {
  const { description, weight } = req.body;
  if (!description || !weight) {
    return res.status(400).json({ message: "Image and description are required" });
  }

  try {
    const apiUrl = `https://api.calorieninjas.com/v1/nutrition?query=${encodeURIComponent(description)}`;
    const apiRes = await axios.get(apiUrl, {
      headers: { "X-Api-Key": process.env.CALORIE_NINJAS_API_KEY }
    });

    const items = apiRes.data.items;
    if (!items || items.length === 0) {
      return res.status(422).json({ message: "Could not recognize food" });
    }

    // Use first item for simplicity
    const food = items[0];
    const factor = weight / (food.serving_size_g || 100);

    const result = {
      calories: +(food.calories * factor).toFixed(1),
      carbs: +(food.carbohydrates_total_g * factor).toFixed(1),
      protein: +(food.protein_g * factor).toFixed(1),
      fat: +(food.fat_total_g * factor).toFixed(1),
      fiber: +(food.fiber_g * factor).toFixed(1),
      sugar: +(food.sugar_g * factor).toFixed(1),
      sodium: +(food.sodium_mg * factor).toFixed(1),
    };

    res.json(result);

  } catch (err) {
    console.error("CalorieNinjas error:", err.response?.data || err.message);
    res.status(500).json({ message: "Nutrition analysis failed" });
  }
});

module.exports = router;
