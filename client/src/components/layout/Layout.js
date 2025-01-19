import React, {  } from 'react'
import './layout.css'
// import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import Menu from '../menus/Menu';
import HomePage from '../../pages/HomePage';
import About from '../../pages/About';
import Education from '../../pages/Education';
import Skills from '../../pages/Skills';
import Projects from '../../pages/Projects';
import Contact from '../../pages/Contact';
import Footer from '../Footer';
// import Something from '../../pages/Something';


const Layout = () => {
  
  return (
    <>
      <div className="layout">
        <Menu/>
        {/* right section  */}
        <div className={"layout-container"} >
          <HomePage />
          <About />
          <Education/>
          <Skills/>
          <Projects/>
          {/* <Something/> */}
          <Contact/>
        </div>

        <Footer/>

      </div>
    </>
  );
}

export default Layout;