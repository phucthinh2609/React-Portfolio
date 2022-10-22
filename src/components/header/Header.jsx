import React from 'react'
import './header.css'
import CTA from "./CTA"
import ME from "../../assets/me.jpeg"
import HeaderSocials from "./HeaderSocials"

const Header = (props) => {

  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mai Van Phuc Thinh</h1>
        <h5>Java Web Developer</h5>
        <CTA/>
        <HeaderSocials/> 

        <div className="me">
          <img src={ME} alt="me" style={{margin: "-26.1rem -35rem 0rem -8.4rem", width: "196%"}}/>
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header