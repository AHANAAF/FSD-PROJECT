pip install textgenrnn
const { TextgenRNN } = require('textgenrnn');

const textgen = new TextgenRNN();

const getSuggestions = async (text) => {
  try {
    const suggestions = await textgen.generate(text);
    return suggestions;
  } catch (error) {
    console.error('Error generating suggestions:', error);
    return [];
  }
};

module.exports = getSuggestions;
