import React, { useState } from 'react';
import axios from 'axios';

const SpellCheck = () => {
  const [text, setText] = useState('');
  const [errors, setErrors] = useState([]);

  const handleCheck = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/spellcheck', { text });
      setErrors(response.data.errors);
    } catch (error) {
      console.error('Error checking spelling:', error);
    }
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text for spelling check"
      />
      <button onClick={handleCheck}>Check Spelling</button>
      {errors.length > 0 && (
        <ul>
          {errors.map((error, index) => (
            <li key={index}>
              Misspelled word: <strong>{error.word}</strong> at position {error.start}-{error.end}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SpellCheck;
