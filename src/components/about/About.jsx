import React from 'react'
import './about.css'
import ME from '../../assets/me2.jpeg'
import { FaAward } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />  
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small style={{fontStyle: "italic"}}>1/2 Year</small>
              <br/>
              <small>Working at Korean company</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Programming</h5>
              <small style={{fontStyle: "italic"}}>1/2 Year</small>
              <br/>
              <small>Java Web Course at Codegym Hue</small>
            </article>

            <article className="about__card">
             <FiUser className='about__icon'/>
              <h5>Study aboard</h5>
              <small style={{fontStyle: "italic"}}>1 year</small>
              <br/>
              <small>Chonbuk National Uni, Korea</small>
            </article>
          </div>

          <p style={{fontStyle: "italic"}}>
          "Hi. My name is Phuc Thinh. I’m a fresher with a half year of study Java web in HueCodeGym Center. And I’m also Korea translator with a half year of experience in some Korea Company in Vietnam and one year of study aboard in Korean by Chonbok National University Student Exchange Programming. I graduated at Hue University of Foreign Langues with The high bachelor’s degree in Korea Language and Culture."
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>


    </section>
  )
}

export default About