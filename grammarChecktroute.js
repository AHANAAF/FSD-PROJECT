const express = require('express');
const checkText = require('../utils/grammarCheck');
const router = express.Router();

router.post('/check', async (req, res) => {
  const { text } = req.body;
  const issues = await checkText(text);
  res.json({ issues });
});

module.exports = router;
