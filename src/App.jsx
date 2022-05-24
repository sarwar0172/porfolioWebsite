import React from 'react'
import Header from './components/header/Header';
import Nav from './components/Nav/Nav'
import About from './components/about/About'
import Expricence from './components/expricence/Expricence'
import Services from './components/Services/Services'
import Portfolio from './components/portfolio/Portfolio';
import Testimonial from './components/testimonial/Testimonial';
import Contact from './components/contact/contact';
import Footer from './components/footer/Footer';
const App = () => {
  return (
      <>
   <Header/>
  <Nav/>
  <About/>
 <Expricence/>
 <Services/>
 <Portfolio/>
 <Testimonial/>
 <Contact/>
 <Footer/>
      </>

  )
}

export default App;