import React from 'react'
import './homePage.css'
import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import Typewriter from 'typewriter-effect';
import { Link, } from 'react-scroll';

const HomePage = () => {
  
  return (
    <>
      <div className="homePage" id='home'>
        <div className="content">
          <h1>Hi There,</h1>
          <h1>
            I'm <span id="name">Maruti Dalvi</span>
          </h1>
          <h4 className='my-4 p-2'>
            <span className='iam'>I am Into...</span>
            <span className="type-writter">
              <Typewriter
                options={{
                  strings: ["MERN Stack Developer","Frontend Developer", "Backend Developer"],
                  interval: 1500,
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h4>
          
          
          <div className="social-media-icons">
            <span>
              <FaGithub/>
            </span>
            <span>
              <GrInstagram/>
            </span>
            <span>
              <FaLinkedin />
            </span>
            <span>
              <HiOutlineMail />
            </span>
            <span>
              <FaTelegramPlane />
            </span>
          </div>
          <Link to='about'><button className='my-4'>About Me</button></Link>
        </div>
        <div className="avtar">
          <img src="./img/myCartoonPhoto.jpg" alt="avtar" height={"300px"} /><div className="social-media-icons-mobile">
            <span>
              <FaGithub/>
            </span>
            <span>
              <GrInstagram/>
            </span>
            <span>
              <FaLinkedin />
            </span>
            <span>
              <HiOutlineMail />
            </span>
            <span>
              <FaTelegramPlane />
            </span>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default HomePage