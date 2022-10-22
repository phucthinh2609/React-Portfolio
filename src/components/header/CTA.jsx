import React from 'react'
import CV from "../../assets/(Eng)MAI-VAN-PHUC-THINH-Java-web-fullstack.pdf"

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA