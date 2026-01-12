import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          Synergy ISO
        </Link>
        <div className="nav-menu">
          <Link to="/" className={isActive('/')}>Home</Link>
          <Link to="/services" className={isActive('/services')}>ISO Services</Link>
          <Link to="/process" className={isActive('/process')}>Our Process</Link>
          <Link to="/testimonials" className={isActive('/testimonials')}>Testimonials</Link>
          <Link to="/contact" className="btn btn-primary">Get Certified</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
