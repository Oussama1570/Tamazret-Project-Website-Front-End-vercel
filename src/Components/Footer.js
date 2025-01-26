import React from 'react';
import "../Styles/StylesFooter.css";
import { Link } from 'react-router-dom';
import Logo from "../../src/Images/Logo Oussama Graphics.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="row">
          <div className="col">
            <h3 className="footer-heading">Tamazret: The Gem of Tunisia</h3>
            <p className="footer-text">Discover the beauty and culture of Tamazret.</p>
          </div>
          <div className="col">
            <Link to="https://www.linkedin.com/in/oussama-labben-51a3051ba/recent-activity/all/">
              <img className='Logo-img-Footer' src={Logo} alt='Logo-footer' />
            </Link>
          </div>
          <div className="col">
            <p className="footer-text">All rights Reserved Oussama Graphics</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;