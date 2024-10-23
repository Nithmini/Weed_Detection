import React, { useState } from 'react';
import './css/Header.css'; // Import the CSS file
import seaLogo from './images/logo.png';
import { Link } from 'react-router-dom';
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
            <Link
              to="/"
              className={activeMenu === 'home' ? 'active' : ''}
              onClick={() => handleMenuClick('home')}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/aboutus"
              className={activeMenu === 'about-us' ? 'active' : ''}
              onClick={() => handleMenuClick('about-us')}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={activeMenu === 'services' ? 'active' : ''}
              onClick={() => handleMenuClick('services')}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contactus"
              className={activeMenu === 'contact-us' ? 'active' : ''}
              onClick={() => handleMenuClick('contact-us')}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/feedback"
              className={activeMenu === 'feedback' ? 'active' : ''}
              onClick={() => handleMenuClick('feedback')}
            >
              Feedback
            </Link>
          </li>
        </ul>
      </nav>
      {/*  <button className="login-button">Login</button>*/}
    </header>
  );
};

export default Header;
