import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div className="pt-20"> {/* Add padding for fixed header if needed, actually defined in section py-5 but good to check */}
            <section className="py-5 bg-grey">
                <div className="container">
                    <div className="section-title">
                        <h1>Expert ISO Consultancy Services</h1>
                        <p>Tailored management system implementations for Sri Lankan industries.</p>
                    </div>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                    <div style={{ display: 'grid', gap: '4rem' }}>

                        {/* ISO 9001 */}
                        <div className="service-section">
                            <h2>ISO 9001:2015 - Quality Management System</h2>
                            <div className="service-card" style={{ border: 'none', background: 'var(--color-grey-bg)', padding: '2rem', marginTop: '1rem', display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                                <div>
                                    <h4 style={{ color: 'var(--color-accent)' }}>Why you need it</h4>
                                    <p>To standardize operations, improve customer satisfaction, and bid for government/international tenders.</p>

                                    <h4 style={{ color: 'var(--color-accent)', marginTop: '1rem' }}>Who it's for</h4>
                                    <p>Manufacturing, Service Providers, Construction, and IT companies.</p>
                                </div>
                                <div>
                                    <h4 style={{ color: 'var(--color-accent)' }}>Key Benefits</h4>
                                    <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem', color: 'var(--color-grey-text)' }}>
                                        <li>Increased operational efficiency</li>
                                        <li>Better customer retention</li>
                                        <li>Global market recognition</li>
                                    </ul>
                                    <p><strong>Typical Timeline:</strong> 3 - 6 Months</p>
                                </div>
                            </div>
                        </div>

                        {/* ISO 14001 */}
                        <div className="service-section">
                            <h2>ISO 14001:2015 - Environmental Management</h2>
                            <div className="service-card" style={{ border: 'none', background: 'var(--color-grey-bg)', padding: '2rem', marginTop: '1rem', display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                                <div>
                                    <h4 style={{ color: 'var(--color-accent)' }}>Why you need it</h4>
                                    <p>To maximize resource usage, comply with environmental laws, and enhance brand reputation.</p>

                                    <h4 style={{ color: 'var(--color-accent)', marginTop: '1rem' }}>Who it's for</h4>
                                    <p>Manufacturing plants, Construction firms, and Waste Management entities.</p>
                                </div>
                                <div>
                                    <h4 style={{ color: 'var(--color-accent)' }}>Key Benefits</h4>
                                    <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem', color: 'var(--color-grey-text)' }}>
                                        <li>Cost savings on waste and energy</li>
                                        <li>Compliance with CEA regulations</li>
                                        <li>Corporate Social Responsibility (CSR)</li>
                                    </ul>
                                    <p><strong>Typical Timeline:</strong> 4 - 6 Months</p>
                                </div>
                            </div>
                        </div>

                        {/* ISO 45001 */}
                        <div className="service-section">
                            <h2>ISO 45001:2018 - Occupational Health & Safety</h2>
                            <div className="service-card" style={{ border: 'none', background: 'var(--color-grey-bg)', padding: '2rem', marginTop: '1rem', display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                                <div>
                                    <h4 style={{ color: 'var(--color-accent)' }}>Why you need it</h4>
                                    <p>To prevent workplace injuries, legal complications, and ensure employee wellbeing.</p>

                                    <h4 style={{ color: 'var(--color-accent)', marginTop: '1rem' }}>Who it's for</h4>
                                    <p>High-risk industries, Construction, Manufacturing, and Logistics.</p>
                                </div>
                                <div>
                                    <h4 style={{ color: 'var(--color-accent)' }}>Key Benefits</h4>
                                    <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem', color: 'var(--color-grey-text)' }}>
                                        <li>Reduced insurance costs</li>
                                        <li>Lower accident rates</li>
                                        <li>Improved employee morale</li>
                                    </ul>
                                    <p><strong>Typical Timeline:</strong> 4 - 8 Months</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="text-center" style={{ marginTop: '4rem' }}>
                        <Link to="/contact" className="btn btn-primary">Start Your Certification Journey</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
