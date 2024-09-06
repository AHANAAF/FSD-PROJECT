import React, { useState } from 'react';
import axios from 'axios';

const GrammarCheck = () => {
  const [text, setText] = useState('');
  const [issues, setIssues] = useState([]);

  const handleCheck = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/grammarcheck/check', { text });
      setIssues(response.data.issues);
    } catch (error) {
      console.error('Error checking text:', error);
    }
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text for grammar check"
      />
      <button className="button" onClick={handleCheck}>Check Grammar</button>
      {issues.length > 0 && (
        <ul>
          {issues.map((issue, index) => (
            <li key={index}>
              <strong>{issue.message}</strong> at position {issue.offset} with context: <em>{issue.context}</em>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GrammarCheck;
