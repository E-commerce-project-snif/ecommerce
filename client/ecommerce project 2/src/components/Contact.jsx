import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Contact.css';


const Contact = () => {
const [name,setname]=useState('');
const [email,setemail]=useState('');
const [phone,setphone]=useState('');
const [text,settext]=useState('');

console.log(name,'tesst')
  return (
    <div className="contact-container">
      <div className="contact-info">
        <div className="contact-method">
          <i className="fas fa-phone-alt"></i>
          <h2>Call To Us</h2>
          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +8801611112222</p>
      
            <hr/>
          
        </div>

        <div className="contact-method">
          <i className="fas fa-envelope"></i>
          <h2>Write To Us</h2>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>Emails: customer@exclusive.com</p>
          <p>Emails: support@exclusive.com</p>
        </div>
      </div>

      <div className="contact-form">
        <form>
            <div style={{display: 'flex', gap: '8px'}}>
          <input type="text" placeholder="Your Name" required style={   { backgroundColor : '#f5f5f5'}} onChange={(e)=>{setname(e.target.value)}}/>
          <input type="email" placeholder="Your Email" required  style={   { backgroundColor : '#f5f5f5'}} onChange={(e)=>{setemail(e.target.value)}}/>
          <input type="tel" placeholder="Your Phone" required  style={   { backgroundColor : '#f5f5f5'}} onChange={(e)=>{setphone(e.target.value)}}/>
          </div>
          <textarea placeholder="Your Message" style={   { backgroundColor : '#f5f5f5' ,height: '200px'}} onChange={(e)=>{settext(e.target.value)}}></textarea>
          <button type="submit" onClick={()=>{}}>Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;