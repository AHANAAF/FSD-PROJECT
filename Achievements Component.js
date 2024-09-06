import React, { useState, useEffect } from "react";
import axios from "axios";

const Achievements = ({ userId }) => {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/users/${userId}`);
        setAchievements(res.data.achievements);
      } catch (error) {
        console.error("Error fetching achievements:", error);
      }
    };
    fetchAchievements();
  }, [userId]);

  return (
    <div>
      <h1>Your Achievements</h1>
      <ul>
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </div>
  );
};

export default Achievements;
