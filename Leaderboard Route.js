const express = require("express");
const User = require("../models/User");
const router = express.Router();

// Get Top 10 Users by Points
router.get("/leaderboard", async (req, res) => {
  try {
    const users = await User.find().sort({ points: -1 }).limit(10);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching leaderboard" });
  }
});

module.exports = router;
