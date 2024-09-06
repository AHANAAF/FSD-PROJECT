const express = require('express');
const analyzeText = require('../utils/textAnalysis');
const router = express.Router();

router.post('/analyze', async (req, res) => {
  const { text } = req.body;
  const sentiment = await analyzeText(text);
  res.json({ sentiment });
});

module.exports = router;
