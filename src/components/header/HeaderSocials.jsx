import React from 'react'
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs'
import { AiFillDribbbleCircle } from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.facebook.com/Phuc.Thinh.99" target="_blank"><BsFacebook/></a>
        <a href="https://github.com" target="_blank"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials