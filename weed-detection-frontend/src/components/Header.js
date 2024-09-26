import React, { useState } from 'react';
import './css/Header.css'; // Import the CSS file
import seaLogo from './images/logo.png';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState('home'); // Default active menu is 'home'

  const handleMenuClick = (menu) => {
    setActiveMenu(menu); // Set the clicked menu as active
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={seaLogo} alt="Sea Logo" className="logo" />
        <span className="logo-text">Verdant</span>
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <a
              href="#home"
              className={activeMenu === 'home' ? 'active' : ''}
              onClick={() => handleMenuClick('home')}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/aboutus"
              className={activeMenu === 'about-us' ? 'active' : ''}
              onClick={() => handleMenuClick('about-us')}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="/services"
              className={activeMenu === 'services' ? 'active' : ''}
              onClick={() => handleMenuClick('services')}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="/contactus"
              className={activeMenu === 'contact-us' ? 'active' : ''}
              onClick={() => handleMenuClick('contact-us')}
            >
              Contact Us
            </a>
          </li>
          <li>
            <a
              href="/feedback"
              className={activeMenu === 'feedback' ? 'active' : ''}
              onClick={() => handleMenuClick('feedback')}
            >
              Feedback
            </a>
          </li>
        </ul>
      </nav>
      <button className="login-button">Login</button>
    </header>
  );
};

export default Header;
