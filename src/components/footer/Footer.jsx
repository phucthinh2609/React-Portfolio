import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { SiZalo } from 'react-icons/si'

export const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>PHUC THINH</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Certifications</a></li>
        <li><a href="#portfolio">Project</a></li>
        <li><a href="#testimonials">References</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/Phuc.Thinh.99/"><FaFacebookF/></a>
        <a href="https://www.instagram.com/ph.thinh2609/"><FiInstagram></FiInstagram></a>
        <a href="https://zalo.me/0787626102"><SiZalo/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; PHUC THINH - All rights reserved</small>
      </div>

    </footer>
  )
}

export default Footer;
