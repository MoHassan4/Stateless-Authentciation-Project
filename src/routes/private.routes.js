const protect = require("../middlewares/auth.middleware");

const router = require("express").Router();

router.get("/", protect, (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to private routes",
    user: req.user,
  });
});

module.exports = router;
