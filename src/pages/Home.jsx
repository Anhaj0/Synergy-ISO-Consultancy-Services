import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <h1>Get ISO Certified Faster with Confidence</h1>
                        <p>Leading ISO consultancy in Sri Lanka. We simplify compliance so you can focus on growing your business with international standards.</p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <Link to="/contact" className="btn btn-primary">Get ISO Certified Faster</Link>
                            <Link to="/services" className="btn btn-outline">Explore Services</Link>
                        </div>

                        <div className="trust-indicators">
                            <div className="stat-item">
                                <h3>15+</h3>
                                <p>Years Experience</p>
                            </div>
                            <div className="stat-item">
                                <h3>200+</h3>
                                <p>Clients Certified</p>
                            </div>
                            <div className="stat-item">
                                <h3>100%</h3>
                                <p>Audit Success</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                    <div className="section-title">
                        <h2>Why Businesses Trust Synergy ISO</h2>
                        <p>We bring authority, clarity, and efficiency to the certification process.</p>
                    </div>

                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon">✓</div>
                            <h3>Local Expertise</h3>
                            <p>Deep understanding of Sri Lankan business context and regulatory requirements aligned with ISO.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">✓</div>
                            <h3>Structured Implementation</h3>
                            <p>A clear, step-by-step roadmap that removes ambiguity and accelerates documentation.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">✓</div>
                            <h3>Guaranteed Certification</h3>
                            <p>Our rigorous internal audit preparation ensures you pass your certification audit the first time.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 bg-grey">
                <div className="container text-center">
                    <div className="section-title" style={{ marginBottom: '2rem' }}>
                        <h2>Ready to Start?</h2>
                        <p>Take the first step towards international recognition.</p>
                    </div>
                    <Link to="/contact" className="btn btn-primary">Request a Quote</Link>
                </div>
            </section>
        </>
    );
};

export default Home;
