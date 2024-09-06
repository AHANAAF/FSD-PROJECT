import React, { useState } from 'react';
import axios from 'axios';

const Suggestions = () => {
  const [text, setText] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleSuggest = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/suggestions/suggestions', { text });
      setSuggestions(response.data.suggestions);
    } catch (error) {
      console.error('Error getting suggestions:', error);
    }
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text for suggestions"
      />
      <button className="button" onClick={handleSuggest}>Get Suggestions</button>
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={index}>{suggestion}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Suggestions;
