// routes/uploadRoutes.js
const express = require("express");
const multer = require("multer");
const cloudinary = require("../utils/cloudinary");
const requireAuth = require("../middlewares/authMiddleware");
const streamifier = require("streamifier"); // 🔑 Required for streaming buffer

const router = express.Router();

// Multer memory storage
const storage = multer.memoryStorage();
const upload = multer({ 
  storage,
  limits: { fileSize: 5 * 1024 * 1024 } // ✅ Limit: 5MB
});

// Upload endpoint
router.post("/upload", requireAuth, upload.single("image"), (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  const stream = cloudinary.uploader.upload_stream(
    {
      resource_type: "image",
      folder: "fitmate"
    },
    (error, result) => {
      if (error) {
        console.error("❌ Cloudinary error:", error);
        return res.status(500).json({ error: "Upload to Cloudinary failed" });
      }
      return res.json({ url: result.secure_url });
    }
  );

  // ✅ Pipe the buffer to Cloudinary
  streamifier.createReadStream(file.buffer).pipe(stream);
});

module.exports = router;
