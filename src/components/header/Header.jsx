import React from 'react'
import './header.css'
import ME from '../../assests/me.png'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials.jsx'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
       <h5>Hello i am</h5>
       <h1>Sarwar Hossain</h1>
       <h5 className="text-light">Fullstack Developer</h5>
       <CTA/>
       <HeaderSocials/>

       <div className="me">
                 <img src={ME} alt="" />
             </div>

             <a href="#contract" className='scorll__down'>Scorll Down</a>
      </div>
    </header>
    
  )
}

export default Header