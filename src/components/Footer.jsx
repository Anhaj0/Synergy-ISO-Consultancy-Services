import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div>
                        <h3>Synergy ISO Consultancy</h3>
                        <p>Your trusted partner for ISO certification and management system compliance in Sri Lanka.</p>
                    </div>
                    <div>
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/services">ISO Services</Link></li>
                            <li><Link to="/process">Process</Link></li>
                            <li><Link to="/testimonials">Testimonials</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Contact</h4>
                        <ul className="footer-links">
                            <li>info@synergyiso.lk</li>
                            <li>+94 11 234 5678</li>
                            <li>Colombo, Sri Lanka</li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    &copy; {new Date().getFullYear()} Synergy ISO Consultancy Services Pvt Ltd. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
