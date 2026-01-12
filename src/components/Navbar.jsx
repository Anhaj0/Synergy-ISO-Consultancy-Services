import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };

  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          Synergy ISO
        </Link>
        
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Navigation">
          <span className={`hamburger ${isOpen ? 'active' : ''}`}></span>
        </button>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/" className={isActive('/')} onClick={closeMenu}>Home</Link>
          <Link to="/services" className={isActive('/services')} onClick={closeMenu}>ISO Services</Link>
          <Link to="/process" className={isActive('/process')} onClick={closeMenu}>Our Process</Link>
          <Link to="/testimonials" className={isActive('/testimonials')} onClick={closeMenu}>Testimonials</Link>
          <Link to="/contact" className="btn btn-primary" onClick={closeMenu}>Get Certified</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
