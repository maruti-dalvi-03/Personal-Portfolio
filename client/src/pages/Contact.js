import React from 'react';
import './contact.css'; // Import the CSS file for styling

const Contact = () => {
  return (
    <div className='contact' style={{minHeight:"80vh"}}>
    <h2 className='text-center text-uppercase fw-semibold pt-5' style={{gap: "7px"}}>Get Touch with Me</h2>
    <div className="contact-container">
      
      <div className="contact-left">
        <div className="contact-info">
          <div className="info-item">
            <h3>LINKEDIN</h3>
            <p>https://www.linkedin.com/in/maruti-dalvi/</p>
          </div>
          <div className="info-item">
            <h3>PHONE NUMBER</h3>
            <p>8689804003<br />9819238163</p>
          </div>
          <div className="info-item">
            <h3>INSTAGRAM</h3>
            <p>maruti-dalvi</p>
          </div>
          <div className="info-item">
            <h3>EMAIL</h3>
            <p>dalvimaruti2816@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="contact-right">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Enter your Name" required  disabled/>
          <input type="email" placeholder="Enter a valid email address" required  disabled/>
          <textarea placeholder="Your Message" required disabled></textarea>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Contact;
