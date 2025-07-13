const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const uploadRoutes = require("./routes/uploadRoutes");

// Load environment variables from .env
dotenv.config();
console.log("Cloudinary name:", process.env.CLOUDINARY_CLOUD_NAME);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // parse incoming JSON requests

// Routes
app.use("/api/auth", authRoutes);     // /api/auth/signup, /api/auth/login
app.use("/api", uploadRoutes);        // /api/upload

// Root endpoint (optional)
app.get("/", (req, res) => {
  res.send("FitMate API is running");
});

const analyzeRoutes = require("./routes/analyzeRoutes");
app.use("/api", analyzeRoutes);

const mealRoutes = require("./routes/mealRoutes");
const goalRoutes = require("./routes/goalRoutes");

app.use("/api/meals", mealRoutes);
app.use("/api/goals", goalRoutes);
// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () =>
      console.log(`🚀 Server running on port ${PORT}`)
    );
  })
  .catch((err) => {
    console.error("❌ DB connection error:", err);
  });
