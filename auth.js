const express = require("express");
const User = require("../models/User");
const router = express.Router();

// Register a user with mobile number
router.post("/register", async (req, res) => {
  const { username, phoneNumber } = req.body;
  try {
    const user = new User({ username, phoneNumber });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
