import React, { useState } from 'react';
import './css/ContactUs.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form Data:', formData);
    };

    const handleClear = () => {
        setFormData({
            fullName: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className="contact-page">
            <div className="contact-container">
                <h1 className="contact-title">Contact Us</h1>
                <div></div>
                <div className="card">
                    <h2 className="send-message-title">Send Message</h2>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="fullName"
                            className="full-name"
                            placeholder="Full Name"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            className="email-input"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            className="message-input"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                        <div className="button-group">
                            <button type="submit" className="submit-button">Send</button>
                            <button type="button" className="clear-button" onClick={handleClear}>Clear</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
