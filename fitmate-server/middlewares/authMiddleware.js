const jwt = require("jsonwebtoken");

/**
 * Middleware to protect routes with JWT
 */
const requireAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Check if Authorization header exists and starts with 'Bearer '
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized: Token missing" });
  }

  const token = authHeader.split(" ")[1];

  try {
    // Decode and verify JWT using the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // ✅ Attach user object with ID to the request for controller access
    req.user = { id: decoded.id };

    next(); // proceed to controller
  } catch (err) {
    console.error("JWT verification failed:", err.message);
    return res.status(403).json({ message: "Unauthorized: Invalid token" });
  }
};

module.exports = requireAuth;
