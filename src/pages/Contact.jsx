import React, { useState } from "react";
import "../styles/Contact.css";
import whatsappIcon from "../assets/whatsapp.png";
import facebookIcon from "../assets/facebook.png";
import instagramIcon from "../assets/instagram.png";
import youtubeIcon from "../assets/youtube.png";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been received. Our team will get back to you shortly.");
    setFormData({ name: "", email: "", message: "" });
  };

  // Function to copy phone number to clipboard
  const copyPhoneNumber = () => {
    navigator.clipboard.writeText("123-456-7890");
    alert("Phone number copied to clipboard!");
  };

  return (
    <div className="contact-container">
      <div className="contact-box">
        <h2>Contact Us</h2>
        <p>Have a question or business inquiry? Fill out the form below, and we will get back to you soon.</p>

        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            className="input-field"
            placeholder="Your Name" 
            value={formData.name} 
            onChange={handleChange} 
            required
          />

          <input 
            type="email" 
            name="email" 
            className="input-field"
            placeholder="Your Email" 
            value={formData.email} 
            onChange={handleChange} 
            required
          />

          <textarea 
            name="message" 
            className="input-field"
            placeholder="Your Message" 
            value={formData.message} 
            onChange={handleChange} 
            required
          ></textarea>

          <button type="submit" className="contact-button">Send Message</button>
        </form>

        {/* Horizontal Line */}
        <hr className="contact-divider" />

        {/* Contact Information */}
        <div className="contact-info">
          <p>
          Contact Us:
            <span className="clickable-text" onClick={copyPhoneNumber}> 123-456-7890</span>
          </p>
          <p>
            Email : 
            <a href="mailto:lunner2025@gmail.com" className="clickable-text"> lunner2025@gmail.com</a>
          </p>
        </div>

        {/* Social Media Links */}
        <div className="social-links">
          <a href="https://wa.me/YOUR_NUMBER" target="_blank" rel="noopener noreferrer">
            <img src={whatsappIcon} alt="WhatsApp" />
          </a>
          <a href="https://facebook.com/YOUR_PAGE" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="https://instagram.com/YOUR_PROFILE" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="https://youtube.com/YOUR_CHANNEL" target="_blank" rel="noopener noreferrer">
            <img src={youtubeIcon} alt="YouTube" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
