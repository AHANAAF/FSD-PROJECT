import React, { useState, useEffect } from 'react';

const ReadAloud = ({ text }) => {
  const [isReading, setIsReading] = useState(false);

  useEffect(() => {
    if (isReading) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onend = () => setIsReading(false);
      speechSynthesis.speak(utterance);

      // Stop reading after 10 seconds
      const timer = setTimeout(() => {
        speechSynthesis.cancel();
        setIsReading(false);
      }, 10000); // 10 seconds

      return () => clearTimeout(timer);
    }
  }, [isReading, text]);

  return (
    <div>
      <button className="button" onClick={() => setIsReading(true)} disabled={isReading}>
        {isReading ? 'Reading...' : 'Read Aloud'}
      </button>
    </div>
  );
};

export default ReadAloud;
