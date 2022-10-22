import React from 'react'
import "./services.css"
import { FaUserGraduate } from 'react-icons/fa'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I have</h5>
      <h2>Certificates</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>JAVA WEB</h3>
          </div>

          <ul className="service__list">
            <li>
              <FaUserGraduate className='service__list-icon'/>
              <p>Certificate of Hue Codegym Center's Java web full-stack course</p>
            </li>
          </ul>
        </article>
        {/* END UI/UX Design */}

        <article className='service'>
          <div className="service__head">
            <h3>UNIVERSITY</h3>
          </div>

          <ul className="service__list">
            <li>
              <FaUserGraduate className='service__list-icon'/>
              <p>The Hight Degree of Bachelor Korean Language Studies at Hue University of Foreign Languages</p>
            </li>
          </ul>
        </article>
        {/* END Web Development */}

        <article className='service'>
          <div className="service__head">
            <h3>STUDY ABOARD</h3>
          </div>

          <ul className="service__list">
            <li>
              <FaUserGraduate className='service__list-icon'/>
              <p>Certificate of Chonbuk University Exchange Student Programming in Korean</p>
            </li>
          </ul>
        </article>
        {/* END Content Creation */}
      </div>

      <div className='container btn-link'>
        <a href="https://drive.google.com/file/d/1k8Q-iJzo86EtfkyFUg-2rqEhMDOM4ASl/view" class="btn">Certificate Link</a>
      </div>





    </section>
  )
}

export default Services