import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactQuill from "react-quill"; // Import react-quill
import "react-quill/dist/quill.snow.css"; // Import Quill's CSS
import './dashboard.css';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [aboutContent, setAboutContent] = useState("");
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState({ name: "", image: "" });

  const API_URL = process.env.REACT_APP_API_URL;
  
  useEffect(() => {
    if (activeSection === "about") {
      fetchAboutContent();
    } else if (activeSection === "skills") {
      fetchSkills();
    }
  }, [activeSection]);

  // Fetch About content
const fetchAboutContent = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/about`);
    setAboutContent(response.data.content || "");
  } catch (error) {
    console.error("Error fetching About content:", error);
  }
};

// Save About content
const handleSaveAbout = () => {
  axios
    .post(`${API_URL}/api/about`, { content: aboutContent })
    .then(() => {
      alert("About content updated!");
    })
    .catch((error) => {
      console.error("Error updating About content:", error);
    });
};

// Fetch Skills
const fetchSkills = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/skills`);
    setSkills(response.data);
  } catch (error) {
    console.error("Error fetching skills:", error);
  }
};

// Add a new skill
const handleAddSkill = async () => {
  try {
    await axios.post(`${API_URL}/api/skills`, newSkill);
    fetchSkills();
    setNewSkill({ name: "", image: "" });
  } catch (error) {
    console.error("Error adding skill:", error);
  }
};

// Delete a skill
const handleDeleteSkill = async (id) => {
  try {
    await axios.delete(`${API_URL}/api/skills/${id}`);
    fetchSkills();
  } catch (error) {
    console.error("Error deleting skill:", error);
  }
};

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return (
          <div>
            <h2>Overview</h2>
            <p>Welcome to the dashboard! Use the menu to manage the website content.</p>
          </div>
        );
      case "about":
        return (
          <div>
            <h2>Edit About Content</h2>
            <ReactQuill value={aboutContent} onChange={setAboutContent} theme="snow" />
            <button onClick={handleSaveAbout}>Save Changes</button>
          </div>
        );
      case "skills":
        return (
            <div>
            <h2>Manage Skills</h2>
            <div className="skill-form">
              <input
                type="text"
                placeholder="Skill Name"
                value={newSkill.name}
                onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
              />
              <input
                type="text"
                placeholder="Image URL"
                value={newSkill.image}
                onChange={(e) => setNewSkill({ ...newSkill, image: e.target.value })}
              />
              <button onClick={handleAddSkill}>Add Skill</button>
            </div>
            <table className="skill-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Skill Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {skills.map((skill) => (
                  <tr key={skill._id}>
                    <td>
                      <img src={skill.image} alt={skill.name} width="50" />
                    </td>
                    <td>{skill.name}</td>
                    <td>
                      <button className="delete-btn" onClick={() => handleDeleteSkill(skill._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
        );
      default:
        return (
          <div>
            <h2>Overview</h2>
            <p>Welcome to the dashboard! Use the menu to manage the website content.</p>
          </div>
        );
    }
  };

  return (
    <div className="dashboard-container">
      <aside className="dashboard-menu">
        <h3>Dashboard Menu</h3>
        <ul>
          <li onClick={() => setActiveSection("overview")}>Overview</li>
          <li onClick={() => setActiveSection("about")}>Edit About</li>
          <li onClick={() => setActiveSection("skills")}>Manage Skills</li>
        </ul>
      </aside>
      <main className="dashboard-content">{renderContent()}</main>
    </div>
  );
};

export default Dashboard;
