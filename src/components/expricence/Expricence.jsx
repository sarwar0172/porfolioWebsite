import React from 'react'
import './exprience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Expricence = () => {
  return (
 <section id="exprience">
   <h5>What skills I have</h5>
   <h2>My exprience</h2>

   <div className="container experience__container">
     <div className="experience__fontend">
       <h3>FronTend Develoment</h3>
       <div className="expericence__content">
         <article className="exprience__details">
          <BsPatchCheckFill className="exprience__details-icon"/>
          <div>
          <h4>HTML</h4>
          <small className='text-light'>Intermediate</small>
          </div>
        
         </article>

         <article className="exprience__details">
          <BsPatchCheckFill className="exprience__details-icon"/>
          <div>
          <h4>CSS</h4>
          <small className='text-light'>Intermediate</small>
          </div>
        
         </article> 

          <article className="exprience__details">
          <BsPatchCheckFill className="exprience__details-icon"/>
          <div>
          <h4>Javascript</h4>
          <small className='text-light'>Expert</small>
          </div>
        
         </article> 

           <article className="exprience__details">
          <BsPatchCheckFill className="exprience__details-icon"/>
          <div>
          <h4>Bootstrap</h4>
          <small className='text-light'>Intermediate</small>
          </div>
        
         </article>
         <article className="exprience__details">
          <BsPatchCheckFill className="exprience__details-icon"/>
          <div>
          <h4>React</h4>
          <small className='text-light'>Advance</small>
          </div>
          
         </article>
       </div>
     </div>
     
     <div className="exprience_backend">
     <h3>Backend Develoment</h3>
     <div className="expericence__content">
     <article className="exprience__details">
          <BsPatchCheckFill className="exprience__details-icon"/>
          <div>
          <h4>PHP</h4>
          <small className='text-light'>Intermediate</small>
          </div>
      
         </article>

         <article className="exprience__details">
          <BsPatchCheckFill className="exprience__details-icon"/>
          <div>
          <h4>MySQL</h4>
          <small className='text-light'>Basic</small>
          </div>
         
         </article>


         
     </div>
     
     </div>
   </div>
 </section>
  )
}

export default Expricence;