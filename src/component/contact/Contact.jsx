import "./contact.scss"

import axios from 'axios';
import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';


const EmailRestAPI = () => {
  const [sent, setSent] = useState('Sent Email')
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const isInputEmpty = name.trim() === '';

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_ta6yhqy';
    const templateId = 'template_x64lywn';
    const publicKey = 'jOxZ4fttfFpEslLmY';

    // Create an object with EmailJS service ID, template ID, Public Key, and Template params
    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: 'Web Wizard',
        message: message,
      }
    };

    // Send the email using EmailJS
    try {
      const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
      console.log(res.data);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="contact" id="contact">
      <div className="top">
        <h1>Contact</h1>
        <h2>Get In Touch.</h2>
      </div>

      <form onSubmit={handleSubmit} className='emailForm'>
        <input
          className="Form"
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="Form"
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          className="FormText"
          placeholder="Message"
          cols="30"
          rows="10"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        >
        </textarea>
        <button  className="Btn" type="submit" disabled={isInputEmpty} onClick={()=>{ setSent("sent ! ")}} >{sent}</button>
      </form>
    </div>
  )
}

export default EmailRestAPI;
