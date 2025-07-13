const express = require("express");
const router = express.Router();
const requireAuth = require("../middlewares/authMiddleware");
const mealController = require("../controllers/mealController");

router.use(requireAuth);

router.post("/", mealController.addMeal);
router.get("/", mealController.getMeals); // for fetching all meals (if needed)

module.exports = router;
