import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import './css/ContactUs.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: ''
    });

    const [error, setError] = useState(null); // To handle errors
    const [successMessage, setSuccessMessage] = useState(null); // To display success message

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send the form data to the backend using axios
            const response = await axios.post('http://localhost:5000/contact/add', {
                name: formData.fullName,
                email: formData.email,
                message: formData.message
            });

            // Check if the submission was successful
            if (response.status === 200) {
                setSuccessMessage('Your message has been sent successfully!');
                setError(null); // Clear any previous errors
                // Clear the form
                setFormData({
                    fullName: '',
                    email: '',
                    message: ''
                });
            }
        } catch (err) {
            // Handle errors from the backend
            if (err.response && err.response.data) {
                setError(err.response.data.error || 'Failed to send message.');
            } else {
                setError('An error occurred. Please try again.');
            }
            setSuccessMessage(null); // Clear any success message
        }
    };

    const handleClear = () => {
        setFormData({
            fullName: '',
            email: '',
            message: ''
        });
        setError(null); // Clear any error message
        setSuccessMessage(null); // Clear any success message
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

                        {/* Display error message */}
                        {error && <p className="error-message">{error}</p>}
                        {/* Display success message */}
                        {successMessage && <p className="success-message">{successMessage}</p>}

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
