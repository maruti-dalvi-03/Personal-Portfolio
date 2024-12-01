import React, { useState } from "react";
import "./menu.css";
import { Link } from "react-scroll";

const Menu = ({ toggle }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the menu state
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Function to close the menu
    const closeMenu = () => {
        setIsOpen(false);
    };

  return (
    <>
   <nav>
  <input type="checkbox" id="check" checked={isOpen} onChange={toggleMenu}/>
  <label htmlFor="check" className="checkbtn">
    =
  </label>
  <label className="logo">My Portfolio</label>
  <ul>
    <li><Link to="home" spy={true} onClick={closeMenu}>Home</Link></li>
    <li><Link to="about" spy={true} onClick={closeMenu}>About</Link></li>
    <li><Link to="education" spy={true} onClick={closeMenu}>Education</Link></li>
    <li><Link to="skills" spy={true} onClick={closeMenu}>Skills</Link></li>
    <li><Link to="projects" spy={true} onClick={closeMenu}>Projects</Link></li>
    <li><Link to="contact" spy={true} onClick={closeMenu}>Contact</Link></li>
  </ul>
</nav>

    </>
  );
};

export default Menu;
