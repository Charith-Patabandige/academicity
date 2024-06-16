import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {



  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /> </h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul>
            <li> <img src={mail_icon} alt="" /> Contact@edusity.com</li>
            <li> <img src={phone_icon} alt="" /> +1 123-456-7890</li>
            <li> <img src={location_icon} alt="" /> 77 Massachusetts Ave, Cambridge
            MA 02139, United States</li>
        </ul>
      </div>

      <div className="contact-col">
        <form>
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter your name'required/>
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number'required/>
            {/* <label>Your Email</label>
            <input type="text" name='name' placeholder='Enter your name'required/> */}
            <label>Write your messages here</label>
            <textarea name="message" rows="6" placeholder='Enter your message'required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /> </button>
        </form>

        <span></span>

      </div>
    </div>
  )
}

export default Contact