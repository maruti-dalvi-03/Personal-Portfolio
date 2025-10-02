import React from "react";
import "./homePage.css";
import { FaGithub, FaLinkedin, } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";

const HomePage = () => {
  return (
    <div className="homePage" id="home">
      <div className="content">
        <h1>Hi There,</h1>
        <h1>
          I'm <span id="name">Maruti Dalvi</span>
        </h1>
        <h4 className="my-4 p-2">
          <span className="iam">I am Into...</span>
          <span className="type-writter">
            <Typewriter
              options={{
                strings: [
                  "MERN Stack Developer",
                  "Frontend Developer",
                  "Backend Developer",
                ],
                interval: 1500,
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h4>

        {/* Social Icons (Single Block) */}
        <div className="social-media-icons">
          <a
            href="https://github.com/maruti-dalvi-03"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <Link to="contact" smooth={true} duration={500}>
            <GrInstagram />
          </Link>
          <a
            href="https://www.linkedin.com/in/maruti-dalvi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:dalvimaruti2816@example.com">
            <HiOutlineMail />
          </a>
          {/* <a
            href="https://t.me/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegramPlane />
          </a> */}
        </div>

        <Link to="about">
          <button className="my-4">About Me</button>
        </Link>
      </div>

      <div className="avtar">
        <img src="./img/myCartoonPhoto.jpg" alt="avtar" />
      </div>
    </div>
  );
};

export default HomePage;
