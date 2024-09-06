//npm install language-tool

const LanguageTool = require('language-tool');

const languageTool = new LanguageTool();

const checkText = async (text) => {
  try {
    const result = await languageTool.check(text);
    return result.matches.map(match => ({
      message: match.message,
      offset: match.offset,
      length: match.length,
      context: match.context.text.slice(match.context.offset, match.context.offset + match.context.length),
    }));
  } catch (error) {
    console.error('Error checking text:', error);
    return [];
  }
};

module.exports = checkText;
