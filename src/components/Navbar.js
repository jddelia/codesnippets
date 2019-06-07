import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navBar">
      <div className="navLeft">
        <img 
          className="navLogo" 
          src={require('../assets/images/codesnippetslogomain.png')} 
          alt="code snippets logo"
        />
      </div>

      <div className="navRight">
        <div className="navLinks">
          <Link to="/" className="navLink">Home</Link>
          <Link to="/search" className="navLink">Search</Link>
          <Link to="/about" className="navLink">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;