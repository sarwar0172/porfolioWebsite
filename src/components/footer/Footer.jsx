import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
   <a href="#" className='footer__logo'>Sarwar</a>
 
 <ul className='permalinks'>
<li><a href="#">Home</a></li>
<li><a href="#about">About</a></li>
<li><a href="#experience">Exprience</a></li>
<li><a href="#portfolio">Portfolio</a></li>
<li><a href="#contact">Contact</a></li>
 </ul>
 <div className="footer__socials">
   <a href="https://facebook.com"><BsFacebook/></a>
   <a href="https://instagram.com"><AiFillInstagram/></a>
   <a href="https://twitter.com"><BsTwitter/></a>

 </div>

 <div className="footer__copyringht">
   <small>&copy;Robin tutorial. All rights reserved</small>
 </div>
    </footer>
  )
}

export default Footer