import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {RiWhatsappFill} from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {

  const form=useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ohrorxx', 'template_1bej2rp', form.current, 'vEkvar2YXS-g8xzR3')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
          alert("your email sent successfully")
      }, (error) => {
          console.log(error.text);
      });
  };



  return (
   <section id='contact'>
     <h5>Get in Touch</h5>
     <h2>Contact Me</h2>
     <div className="container contact__container">
       <div className="contact__options">
         <article className="contact__option">
           <MdEmail className="contact__option-icon"/>
           <h4>Email</h4>
           <h5>sarwarhossain017244@gmail.com</h5>
           <a href="mailto:sarwarhossain017244@gmai.com">Send a 
           massage</a>
         </article>
         <article className="contact__option">
           <BsMessenger className="contact__option-icon"/>
           <h4>Messenger</h4>
           <h5>Robin0172442</h5>
           <a href="https://m.me/robin0172442">Send a 
           massage</a>
         </article>
         <article className="contact__option">
           <RiWhatsappFill className="contact__option-icon"/>
           <h4>WhatsApp</h4>
           <h5>+8801308528090</h5>
           <a href="https://api.whatsapp.com/send?phone=+8801308528090">Send a 
           massage</a>
         </article>
       </div>
       {/* END OF CONTACT OPTION */}
       <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='your full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="massage"  rows="7" placeholder="Your Message" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
       </form>
     </div>
   </section>
  )
}

export default Contact;