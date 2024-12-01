import React from 'react'
import './skills.css'
import { FaCode } from "react-icons/fa";

const Skills = () => {
  return (
    <div className='skills' id='skills'>
      <h1 className='mb-3'><FaCode/>Skills <span>& Abilities</span></h1>
      <div className='skills-items'>
        <div className='skills-item'>
          <img src="./img/html.png" alt="html" />
          <p>HTML5</p>
        </div>
        <div className='skills-item'>
          <img src="./img/css.png" alt="css" />
          <p>CSS3</p>
        </div>
        <div className='skills-item'>
          <img src="./img/js.png" alt="js" />
          <p>JavaScript</p>
        </div>
        <div className='skills-item'>
          <img src="./img/react.png" alt="react" />
          <p>React</p>
        </div>
        <div className='skills-item'>
          <img src="./img/mongodb.svg" alt="react" />
          <p>MongoDb</p>
        </div>
        <div className='skills-item'>
          <img src="./img/node-js.svg" alt="react" />
          <p>Node</p>
        </div>
        <div className='skills-item'>
          <img src="./img/express.png" alt="react" />
          <p>Express</p>
        </div>
        <div className='skills-item'>
          <img src="./img/bootstrap.png" alt="bootstrap" />
          <p>Bootstrap</p>
        </div>
        <div className='skills-item'>
          <img src="./img/java.png" alt="java" />
          <p>Java</p>
        </div>
        <div className='skills-item'>
          <img src="./img/sass.png" alt="sass" />
          <p>SASS</p>
        </div>
        <div className='skills-item'>
          <img src="./img/cyclic.png" alt="cyclic" />
          <p>Cyclic</p>
        </div>
        <div className='skills-item'>
          <img src="./img/github.png" alt="github" />
          <p>GitHub</p>
        </div>
      </div>
        
    </div>
  )
}

export default Skills