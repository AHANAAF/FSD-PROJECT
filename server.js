const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/auth', require('./routes/auth'));
app.use('/api/leaderboard', require('./routes/leaderboard'));
app.use('/api/spellcheck', require('./routes/spellcheck'));  // Add this line
app.use('/api/grammarcheck', require('./routes/grammarCheck'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
