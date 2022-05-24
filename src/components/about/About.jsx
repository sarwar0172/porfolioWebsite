import React from 'react'
import "./about.css"
import ME from '../../assests/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {

  return (
   <section id="about">
     <h5>About Me</h5>
     <div className="container about__container">
       <div className="about__me">
         <div className="about__me-image" >
           <img src={ME} alt=""  />
         </div>
       </div>
       <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon"/>
                   <h5>Expricence</h5>
                   <small>3+ Years working</small>
              </article>
              <article className="about__card">
                <FiUsers className="about__icon"/>
                   <h5>Clinents</h5>
                   <small>200++ wordlwide</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icon"/>
                   <h5>Projects</h5>
                   <small>80+ completed</small>
              </article>
            </div>
            <p>
              i am a full-stack web developer. i am expert at javascript. i know html,css,javascript,bootstrap,
              i am also good at php and mysql, i used php and mysql for backend development
            </p>
            <a href="#contact" className="btn btn-primary">Let's talk</a>
       </div>
     </div>
   </section>

  )
}

export default About;