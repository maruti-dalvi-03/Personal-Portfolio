import React, { useState, useEffect } from "react";
import axios from "axios";
import "./skills.css";
import { FaCode } from "react-icons/fa";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL || ""}/api/skills`);
        setSkills(response.data);
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };
    fetchSkills();
  }, []);

  return (
    <div className="skills" id="skills">
      <h1 className="mb-3">
        <FaCode />
        Skills <span>& Abilities</span>
      </h1>
      <div className="skills-items">
        {skills.map((skill) => (
          <div className="skills-item" key={skill._id}>
            <img src={skill.image} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
