//npm install --save @google-cloud/language

const { LanguageServiceClient } = require('@google-cloud/language');
const client = new LanguageServiceClient();

const analyzeText = async (text) => {
  const document = {
    content: text,
    type: 'PLAIN_TEXT',
  };

  const [result] = await client.analyzeSentiment({ document });
  return result.documentSentiment;
};

module.exports = analyzeText;
