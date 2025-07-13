// routes/goalRoutes.js
const express = require("express");
const router = express.Router();
const goalController = require("../controllers/goalController");
const requireAuth = require("../middlewares/authMiddleware");

router.use(requireAuth);

router.post("/set-goal", goalController.setOrUpdateGoal);
router.get("/get-goal", goalController.getGoal);

module.exports = router;
