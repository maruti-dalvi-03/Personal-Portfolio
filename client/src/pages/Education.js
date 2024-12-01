import React from "react";
import "./education.css";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <div className="education" id="education">
      <h1 className="mt-4"><FaGraduationCap />My Education</h1>

      <div className="education-items mt-4">
        <div className="education-item fade-in">
          <h3>Master of Computer Application</h3>
          <p>Late Bhausaheb Hiray S S Trusts Institute of Computer Application | MU Univercity</p>
          <p className="year">2024-2026 | Pursuing</p>
        </div>

        <div className="education-item fade-in">
          <h3>Bachelor of Science in Computer Science</h3>
          <p>Rizvi College of Art, Science & Commerce | MU Univercity</p>
          <p className="year">2021-2024 | 7.90 CGPA</p>
        </div>

        <div className="education-item fade-in">
          <h3>HSC Science | Computer Science</h3>
          <p>Abhinav Vidya Mandir | Maharashtra Board</p>
          <p className="year">2020-2021 | Completed</p>
        </div>

        <div className="education-item fade-in">
          <h3>SSC</h3>
          <p>Lokamanya Vidyalaya | Maharashtra Board</p>
          <p className="year">2018-2019 | Completed</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
