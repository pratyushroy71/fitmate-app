const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/authController");
const requireAuth = require("../middlewares/authMiddleware");

// Public routes
router.post("/signup", signup);
router.post("/login", login);

// Protected route example
router.get("/me", requireAuth, (req, res) => {
  res.json({
    message: "Access granted to protected route ✅",
    userId: req.userId,
  });
});

module.exports = router;
