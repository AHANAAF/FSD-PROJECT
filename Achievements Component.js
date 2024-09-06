import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import "../styles/animations.css";

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
    <motion.div
      className="achievements-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="slide-in-right visible">Your Achievements</h1>
      <ul>
        {achievements.map((achievement, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            {achievement}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Achievements;
