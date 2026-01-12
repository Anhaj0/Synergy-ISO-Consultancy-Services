import React from 'react';

const Contact = () => {
    return (
        <section className="py-5">
            <div className="container">
                <div className="section-title">
                    <h1>Get ISO Certified Faster</h1>
                    <p>Request a free consultation and quote today.</p>
                </div>

                <div className="contact-card">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Company Name</label>
                            <input type="text" style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-grey-light)', borderRadius: '4px' }} />
                        </div>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Contact Person</label>
                            <input type="text" style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-grey-light)', borderRadius: '4px' }} />
                        </div>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Email Address</label>
                            <input type="email" style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-grey-light)', borderRadius: '4px' }} />
                        </div>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Interested Service</label>
                            <select style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-grey-light)', borderRadius: '4px' }}>
                                <option value="9001">ISO 9001 - Quality Management</option>
                                <option value="14001">ISO 14001 - Environmental Management</option>
                                <option value="45001">ISO 45001 - Health & Safety</option>
                                <option value="Integrated">Integrated Management System</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div style={{ marginBottom: '2rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Message (Optional)</label>
                            <textarea style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-grey-light)', borderRadius: '4px', minHeight: '120px' }}></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Request</button>
                    </form>
                </div>
            </div>
        </section>
    );
};
export default Contact;
