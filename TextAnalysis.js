import React, { useState } from 'react';
import axios from 'axios';

const TextAnalysis = () => {
  const [text, setText] = useState('');
  const [sentiment, setSentiment] = useState(null);

  const handleAnalyze = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/textanalysis/analyze', { text });
      setSentiment(response.data.sentiment);
    } catch (error) {
      console.error('Error analyzing text:', error);
    }
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text for analysis"
      />
      <button className="button" onClick={handleAnalyze}>Analyze Text</button>
      {sentiment && (
        <div>
          <h3>Sentiment Analysis</h3>
          <p>Score: {sentiment.score}</p>
          <p>Magnitude: {sentiment.magnitude}</p>
        </div>
      )}
    </div>
  );
};

export default TextAnalysis;
