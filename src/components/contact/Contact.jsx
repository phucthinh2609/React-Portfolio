import React, { useRef } from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessageLine } from 'react-icons/ri'
import { SiZalo } from 'react-icons/si'
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_epqaudy', 'template_g1xl739', form.current, 'ca1ZJt4cg_zerN_UQ')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    }); 

    e.target.reset();
  };

  return (
    <section id='contact'>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>phucthinh2609@gmail.com</h5>
            <a href="mailto:phucthinh2609@gmail.com">Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessageLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Phúc Thịnh</h5>
            <a href="https://m.me/Phuc.Thinh.99">Send a message</a>
          </article>
          <article className='contact__option'>
            <SiZalo className='contact__option-icon'/>
            <h4>Zalo</h4>
            <h5>+(84)787626102</h5>
            <a href="https://zalo.me/0787626102">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your name...' required />
          <input type="email" name='email' placeholder='Your email...' required />
          <textarea name="messsage" rows="10" placeholder='Your message...'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact