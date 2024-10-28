import React from 'react';
import './css/Footer.css';
//import seaLogo from './images/logo.png';
import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn, FaFacebook } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="footer">
     
      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Service</a>
        <a href="#contact">Contact Us</a>
      </div>
      <div className="social-icons">
        <FaInstagram className="icon" />
        <FaTwitter className="icon" />
        <FaFacebookF className="icon" />
        <FaLinkedinIn className="icon linkedin" />
        <FaFacebook className="icon" />
      </div>
      <hr className="horizontal-line" />
      <div className="copyright">
        <p>Copyright green guardian</p>
      </div>
    </footer>
  );
};

export default Footer;
