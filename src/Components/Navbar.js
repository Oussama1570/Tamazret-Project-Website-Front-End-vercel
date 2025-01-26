import React from 'react';
import "../Styles/StylesNavbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav>
       
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Tourism">Tourism</Link></li>
          <li><Link to="/Houses">Houses</Link></li>
          <li><Link to="/Food">Food</Link></li>
          <li><Link to="/About">About</Link></li>
          
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;