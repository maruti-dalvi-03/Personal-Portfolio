import React, { useState } from "react";
import axios from "axios";
import ReactQuill from "react-quill"; // Import react-quill
import "react-quill/dist/quill.snow.css"; // Import Quill's CSS
import './dashboard.css';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [aboutContent, setAboutContent] = useState("");

  const handleChange = (value) => {
    setAboutContent(value);
  };

  const handleSave = () => {
    // Update About content in the database
    axios.post("http://localhost:5001/api/about", { content: aboutContent })
      .then((response) => {
        alert("About content updated!");
      })
      .catch((error) => {
        console.error("Error updating About content:", error);
      });
  };

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return <div><h2>Overview</h2><p>Welcome to the dashboard!</p></div>;
      case "about":
        return (
          <div>
            <h2>Edit About Content</h2>
            <ReactQuill
              value={aboutContent}
              onChange={handleChange}
              theme="snow"
            />
            <button onClick={handleSave}>Save Changes</button>
          </div>
        );
      default:
        return <div><h2>Overview</h2><p>Welcome to the dashboard!</p></div>;
    }
  };

  return (
    <div className="dashboard-container">
      <aside className="dashboard-menu">
        <h3>Dashboard Menu</h3>
        <ul>
          <li onClick={() => setActiveSection("overview")}>Overview</li>
          <li onClick={() => setActiveSection("about")}>Edit About</li>
        </ul>
      </aside>
      <main className="dashboard-content">{renderContent()}</main>
    </div>
  );
};

export default Dashboard;
