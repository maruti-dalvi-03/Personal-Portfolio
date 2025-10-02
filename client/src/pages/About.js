import React, { useState, useEffect } from "react";
import "./about.css";
import { MdPlace, MdOutlineMailOutline, MdArrowForwardIos } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import Resume from "../assets/MarutisCV-1906.pdf";
import axios from "axios"; // Add axios for API requests

const About = () => {
  const [aboutContent, setAboutContent] = useState("");

  // Fetch the content from the server (on initial render)
  useEffect(() => {
    axios.get("http://localhost:5001/api/about")
      .then(response => {
        setAboutContent(response.data.content); // Assuming the API returns a field called 'content'
      })
      .catch(error => {
        console.error("Error fetching About content:", error);
      });
  }, []);

  return (
    <div className="about" id="about">
      <h1 className="text-center mb-4">
        <FaUser /> About Me
      </h1>
      <div className="p-2" 
           dangerouslySetInnerHTML={{ __html: aboutContent || "Loading content..." }} /> {/* Render HTML content */}
      <button className="resume-btn">
        <a href={Resume} download={"CV-GeneralMD.pdf.pdf"}>
          Resume
        </a>
        <MdArrowForwardIos />
      </button>
      <div className="p-2">
        <MdPlace color="purple" size={28} />
        <span>Place: </span>Mumbai, Maharashtra
      </div>
      <div className="p-2">
        <MdOutlineMailOutline color="orange" size={25} />
        <span>Mail: </span>{" "}
        <a href="mailto:dalvimaruti2816@gmail.com">dalvimaruti2816@gmail.com</a>
      </div>
    </div>
  );
};

export default About;
