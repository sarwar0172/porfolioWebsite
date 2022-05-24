import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubAlt} from 'react-icons/fa'
import{FaFacebook} from 'react-icons/fa'
const HeaderSocials = () => {
  return (
     <div className="header__socical">
         <a href="https://www.linkedin.com/in/robin-technical-00183a230/" target="_blank"><BsLinkedin/></a>
         <a href="https://github.com/sarwar0172" target="_blank"><FaGithubAlt/></a>
         <a href="https://www.facebook.com/robin0172442" target="_blank"><FaFacebook/></a>

     </div>
  )
}

export default HeaderSocials