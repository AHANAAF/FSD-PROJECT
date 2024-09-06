const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  phoneNumber: { type: String, unique: true },
  points: { type: Number, default: 0 },
  achievements: { type: Array, default: [] },
});

module.exports = mongoose.model("User", userSchema);
