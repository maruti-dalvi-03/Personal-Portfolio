import React, { useState, useEffect } from "react";
import "./menu.css";
import { Link } from "react-scroll";
import AdminLogin from "../../Admin/AdminLogin";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check localStorage for login status on mount
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleLoginPopup = () => {
    setShowLogin(!showLogin);
  };

  const handleLoginSuccess = (token) => {
    localStorage.setItem("authToken", token); // Store token in localStorage
    setIsAuthenticated(true);
    toggleLoginPopup();  // Close the login popup after successful login
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Remove token from localStorage
    setIsAuthenticated(false);
  };

  return (
    <>
      <nav>
        <input type="checkbox" id="check" checked={isOpen} onChange={toggleMenu} />
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
          {isAuthenticated ? (
            <li>
              <a href="#logout" onClick={(e) => {
                e.preventDefault();
                handleLogout();
              }}>
                Sign Out
              </a>
            </li>
          ) : (
            <li>
              <a href="#login" onClick={(e) => {
                e.preventDefault();
                toggleLoginPopup();
              }}>
                Login
              </a>
            </li>
          )}
        </ul>
      </nav>

      {showLogin && <AdminLogin closePopup={toggleLoginPopup} onLoginSuccess={handleLoginSuccess} />}
    </>
  );
};

export default Menu;
