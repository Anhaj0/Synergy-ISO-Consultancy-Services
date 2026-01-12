import React from 'react';

const Testimonials = () => {
    return (
        <section className="py-5">
            <div className="container">
                <div className="section-title">
                    <h1>What Our Clients Say</h1>
                    <p>We pride ourselves on long-term partnerships and repeat business.</p>
                </div>

                <div className="testimonials-grid">
                    <div className="testimonial-card">
                        <div className="quote-icon">“</div>
                        <p>"Synergy ISO made the ISO 9001 certification process incredibly smooth. Their consultants were professional and understood our manufacturing challenges perfectly. We saw immediate improvements in our defect rates."</p>
                        <div className="client-info">
                            <h4>Mr. Rohan Perera</h4>
                            <p>Managing Director, Lanka Exports Pvt Ltd</p>
                        </div>
                    </div>

                    <div className="testimonial-card">
                        <div className="quote-icon">“</div>
                        <p>"We achieved ISO 14001 certification in record time thanks to their structured approach or documentation. They handled the complexity so we could focus on our core business. Highly recommended."</p>
                        <div className="client-info">
                            <h4>Ms. Sarah Silva</h4>
                            <p>Operations Manager, GreenLogistics</p>
                        </div>
                    </div>

                    <div className="testimonial-card">
                        <div className="quote-icon">“</div>
                        <p>"Professional, knowledgeable, and efficient. They didn't just help us get a certificate; they improved our entire management system. The ROI on their consulting fee was evident within 6 months."</p>
                        <div className="client-info">
                            <h4>Mr. Kamal De Silva</h4>
                            <p>Director, TechSolutions</p>
                        </div>
                    </div>

                    <div className="testimonial-card">
                        <div className="quote-icon">“</div>
                        <p>"Their internal audit preparation was thorough. We passed the external audit with zero non-conformities. The team at Synergy ISO is a true partner in our growth."</p>
                        <div className="client-info">
                            <h4>Mrs. P. Jayawardena</h4>
                            <p>CEO, BlueWave Construction</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Testimonials;
