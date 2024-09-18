import React from 'react'

function Contact() {
  return (
    <section id='contact'>
        <p className='section__text__p1'>Get In Touch</p>
        <h1 className='title'>Contact Me</h1>
        <div className='contact-info-upper-container'>
            <div className='contact-info-container'>
                <img src="/src/assets/email.png" alt="email icon" className='icon contact-icon'/>
                <p><a href="mailto:examplemail@gmail.com">obatdave@gmail.com</a></p>
            </div>
            <div className='contact-info-container'>
                <img src="/src/assets/linkedin.png" alt="linkedin icon" className='icon contact-icon'/>
                <p><a href="#">obatdave@gmail.com</a></p>
            </div>
            <div className='contact-info-container'>
                <img src="/src/assets/phone.png" alt="phone icon" className='icon contact-icon'/>
                <p><a>+254 734 639 159</a></p>
                <p><a>+254 110 945 414</a></p>
            </div>
        </div>
    </section>
  )
}

export default Contact