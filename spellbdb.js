npm install spellchecker
const Spellchecker = require('spellchecker');

const checkSpelling = (text) => {
  const misspelledWords = Spellchecker.checkSpelling(text).map(error => ({
    word: text.slice(error.start, error.end),
    start: error.start,
    end: error.end,
  }));
  
  return misspelledWords;
};

module.exports = checkSpelling;
