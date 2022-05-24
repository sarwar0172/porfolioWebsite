import React from 'react'
import './portfolio.css'
import IMG1 from '../../assests/ecommarce.jpg'
import IMG2 from '../../assests/google-map.jpg'
import IMG3 from '../../assests/matching-game.png'
import IMG4 from '../../assests/magic-ball.png'
import IMG5 from '../../assests/react-ecommarce.jpg'
import IMG6 from '../../assests/mental_health.jpg'

const data=[
  {
    id:1,
    image:IMG1,
    title: 'E Commerce website',
    github: 'https://github.com/sarwar0172/emomarch.github.io.git',
    demo: 'https://sarwar0172.github.io/emomarch.github.io/'
  },
  {
    id:2,
    image:IMG2,
    title: 'Google Api Marker',
    github: 'https://github.com/sarwar0172/Googel-api-marker.github.io.git',
    demo: 'https://sarwar0172.github.io/Googel-api-marker.github.io/'
  },  {
    id:3,
    image:IMG3,
    title: 'Matching game in javascript',
    github: 'https://github.com/sarwar0172/matching-game.github.io.git',
    demo: 'https://sarwar0172.github.io/matching-game.github.io/'
  },  {
    id:4,
    image:IMG4,
    title: 'Magic ball',
    github: 'https://github.com/sarwar0172/magic-ball.github.io.git',
    demo: 'https://sarwar0172.github.io/magic-ball.github.io/'
  },  {
    id:5,
    image:IMG5,
    title: 'React E-commarce site',
    github: 'https://github.com/sarwar0172/reactEcommarce.git',
    demo: 'https://sarwar0172.github.io/reactEcommarce/'
  },  {
    id:6,
    image:IMG6,
    title: 'website for mental health',
    github: 'https://github.com/sarwar0172/mental-health-live.github.io.git',
    demo: 'https://sarwar0172.github.io/mental-health-live.github.io/'
  },

]

const Portfolio = () => {
  return (
  <section id="portfolio">
    <h5>My recent work</h5>
    <h2>portfolio</h2>

    <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo}) =>{
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__itam-image">
               <img src={image} alt={title} />
               </div>
               <h3>{title}</h3>
               <div className="portfolio__item-cta">
               <a href={github} className="btn">Github</a>
               <a href={demo} className="btn btn-primary">Live Demo</a>
               </div>
               </article>
            )
          })
        }
     
    

    </div>
  </section>
  )
}

export default Portfolio