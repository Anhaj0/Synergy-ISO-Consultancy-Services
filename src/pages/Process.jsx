import React from 'react';
import { Link } from 'react-router-dom';

const Process = () => {
    return (
        <section className="py-5">
            <div className="container">
                <div className="section-title">
                    <h1>Certification Process</h1>
                    <p>We simplify the complex path to ISO certification into 5 clear steps.</p>
                </div>

                <div className="process-timeline" style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
                    <div style={{ position: 'absolute', left: '24px', top: '0', bottom: '0', width: '2px', background: 'var(--color-grey-light)', zIndex: '-1' }}></div>

                    {/* Step 1 */}
                    <div className="process-step-row" style={{ display: 'flex', gap: '2rem', marginBottom: '3rem', alignItems: 'flex-start', background: 'white' }}>
                        <div className="step-number" style={{ flexShrink: 0, width: '50px', height: '50px', fontSize: '1.25rem', margin: 0 }}>1</div>
                        <div>
                            <h3>Gap Analysis</h3>
                            <p>We evaluate your current processes against ISO requirements to identify what needs to change. You get a detailed report outlining the roadmap.</p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="process-step-row" style={{ display: 'flex', gap: '2rem', marginBottom: '3rem', alignItems: 'flex-start', background: 'white' }}>
                        <div className="step-number" style={{ flexShrink: 0, width: '50px', height: '50px', fontSize: '1.25rem', margin: 0 }}>2</div>
                        <div>
                            <h3>System Documentation</h3>
                            <p>We work with you to create the mandatory Quality Manual, Procedures, and Records. We focus on lean documentation that supports your business, not hinders it.</p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="process-step-row" style={{ display: 'flex', gap: '2rem', marginBottom: '3rem', alignItems: 'flex-start', background: 'white' }}>
                        <div className="step-number" style={{ flexShrink: 0, width: '50px', height: '50px', fontSize: '1.25rem', margin: 0 }}>3</div>
                        <div>
                            <h3>Implementation & Training</h3>
                            <p>We train your team on the new standards to ensure everyone fits into the new system. This brings the documents to life in your daily operations.</p>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="process-step-row" style={{ display: 'flex', gap: '2rem', marginBottom: '3rem', alignItems: 'flex-start', background: 'white' }}>
                        <div className="step-number" style={{ flexShrink: 0, width: '50px', height: '50px', fontSize: '1.25rem', margin: 0 }}>4</div>
                        <div>
                            <h3>Internal Audit & Review</h3>
                            <p>Our consultants conduct a full mock audit to verify compliance. We identify and fix any non-conformities before the real audit.</p>
                        </div>
                    </div>

                    {/* Step 5 */}
                    <div className="process-step-row" style={{ display: 'flex', gap: '2rem', marginBottom: '0', alignItems: 'flex-start', background: 'white' }}>
                        <div className="step-number" style={{ flexShrink: 0, width: '50px', height: '50px', fontSize: '1.25rem', background: 'var(--color-accent)', margin: 0 }}>5</div>
                        <div>
                            <h3>Certification Details</h3>
                            <p>We facilitate the external audit with a Certification Body. You achieve your ISO Certification and gain international recognition.</p>
                        </div>
                    </div>

                </div>

                <div className="text-center" style={{ marginTop: '4rem' }}>
                    <Link to="/contact" className="btn btn-primary">Start Step 1 Today</Link>
                </div>
            </div>
        </section>
    );
};
export default Process;
