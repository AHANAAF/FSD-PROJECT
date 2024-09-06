const express = require('express');
const getSuggestions = require('../utils/contextualSuggestions');
const router = express.Router();

router.post('/suggestions', async (req, res) => {
  const { text } = req.body;
  const suggestions = await getSuggestions(text);
  res.json({ suggestions });
});

module.exports = router;
