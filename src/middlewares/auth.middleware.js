const jwt = require("jsonwebtoken");

const protect = async (req, res, next) => {
  const token = req.headers["Authorization"];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Not Authorized User",
    });
  }

  try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error.Please try again later",
    });
  }
};

module.exports = protect;
