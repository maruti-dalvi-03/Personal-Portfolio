import React from 'react'
import './project.css'
import { FaEye, FaCode } from "react-icons/fa";

const Projects = () => {
  return (
    <div className='projects' id='projects'>
        <h1>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-width="2" d="M9,15 L9,23 L1,23 L1,15 L9,15 Z M23,15 L23,23 L15,23 L15,15 L23,15 Z M9,1 L9,9 L1,9 L1,1 L9,1 Z M23,1 L23,9 L15,9 L15,1 L23,1 Z"></path></svg>
          Projects
        </h1>
        <div className='prj-items'>
          <div className='prj-item'>
            {/* <span className='top-left'>Full Stack</span> */}
            <h3 className='scrolling-text'>E-Commerce Website with Admin Panel</h3>
            <img src="./img/prjImage1.png" alt="prj 1" />
            <p className='prj-description'>I developed Online Shopping Platform for Fruits and Vegeatbles using MERN Stack.</p>
            <p className='prj-technology'>Technology:- MERN Stack</p>
            <div className='btns'>
              <a href="https://tame-red-jaguar-ring.cyclic.app" target="_blank" rel="noopener noreferrer"><button className='btn1'><FaEye /> View </button></a>
              <a href="https://github.com/maruti-dalvi-03/MERN-Stack--Fruits-and-Vegetables-Online-Shop-" target="_blank" rel="noopener noreferrer"><button className='btn2'> Code <FaCode /></button></a>
            </div>
          </div>

          <div className='prj-item'>
          {/* <span className='top-left'>Frontend</span> */}
          <div className='content'>
            <h3 className='scrolling-text'>My Portfolio website using react and node</h3>
            <img src="./img/prjImage2.png" alt="prj2" />
            <p className='prj-description'>I developed Personal Portfolio for me using MERN Stack.</p>
            <p className='prj-technology'>Technology:- MERN Stack</p>
            <div className='btns'>
              <a href="na" target="_blank" rel="noopener noreferrer"><button className='btn1'><FaEye /> View </button></a>
              <a href="https://github.com/maruti-dalvi-03/" target="_blank" rel="noopener noreferrer"><button className='btn2'> Code <FaCode /></button></a>
            </div>
          </div>
          </div>

          <div className='prj-item'>
          {/* <span className='top-left'>Frontend</span> */}
            <h3 className='scrolling-text'>Multiple Diseases Prediction</h3>
            <img src="./img/prjImage3.png" alt="prj 3" />
            <p className='prj-description'>Platform for Predicting Muliple Diseases Based on Symptoms.</p>
            <p className='prj-technology'>Technology:- HTML, CSS, Python, Flask</p>
            <div className='btns'>
              <a href="/" target="_blank" rel="noopener noreferrer"><button className='btn1'><FaEye /> View </button></a>
              <a href="https://github.com/maruti-dalvi-03/symptoms-based-disease-prediction.git" target="_blank" rel="noopener noreferrer"><button className='btn2'> Code <FaCode /></button></a>
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default Projects;