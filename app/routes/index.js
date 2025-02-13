const express = require("express");
const router = express.Router();
const characterRoutes = require("./characterRoutes");

router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: `${req.method} - Request made`,
  });
});

router.use("/characters", characterRoutes);

module.exports = router;
