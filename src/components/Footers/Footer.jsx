import React from 'react';
import './Footer.css';

import footerLogo from '../Assets/logo_big.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pintester_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footerLogo} alt="Logo" />
        <p>OrderIt</p>
      </div>

      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="Instagram" />
          <img src={pintester_icon} alt="Pinterest" />
          <img src={whatsapp_icon} alt="WhatsApp" />
        </div>
      </div>

      <div className="footer-copyright">
        <p>Developed By Rohit Halsana</p>
        <hr />
        <p>Copyright © 2025 - All Rights Reserved </p>
      </div>
    </div>
  );
};

export default Footer;
