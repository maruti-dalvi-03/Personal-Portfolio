import React from "react";
import "./about.css";
import {
  MdPlace,
  MdOutlineMailOutline,
  MdArrowForwardIos,
} from "react-icons/md";
import { FaUser } from "react-icons/fa";
import Resume from "../assets/MarutisCV-1906.pdf";

const About = () => {
  return (
    <div className="about" id="about">
      <h1 className="text-center mb-4">
        <FaUser /> About Me
      </h1>
      <p className="p-2">
        Hello! I'm a passionate and dedicated Software Developer with a solid
        foundation in Computer Science and hands-on experience in building web
        applications. I recently graduated with a Bachelor's in Computer Science
        and am currently pursuing my Master's in Computer Applications (MCA). I
        specialize in both front-end and back-end development, with expertise in
        technologies like React, Node.js, Express, MongoDB, and more. My
        portfolio includes projects such as a responsive e-commerce website with
        an admin panel, a symptoms-based disease prediction app using Flask, and
        a personal portfolio website (yes, the one you're viewing right now!). I
        thrive on solving complex problems, writing clean code, and creating
        intuitive user experiences. I believe in continuous learning and
        actively seek opportunities to enhance my technical skills. When I'm not
        coding, you'll find me exploring new technologies, contributing to
        open-source projects, or brainstorming ideas for my next big project.
        Feel free to explore my work and connect with me for collaboration or
        opportunities. Let’s build something amazing together!
      </p>
      <button className="resume-btn">
        <a href={Resume} download={"MarutiDalvi_CV.pdf"}>
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
