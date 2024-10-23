import React, { useState } from 'react';
import './css/GetStart.css'; // Ensure to create this CSS file

const GetStart = () => {
  const [formData, setFormData] = useState({
    name: '',
    district: '',
    details: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., API call)
    console.log('Form Data:', formData);
  };

  return (
    <div className="contact-page">
    <div className="contact-container">
        <h1 className="contact-title">Get Start</h1>
        <div></div>
        <div className="card">
          <form className="getStart-form" onSubmit={handleSubmit}>
            <div className="image-upload">
              <label className="upload-placeholder">
                {formData.image ? (
                  <img
                    src={URL.createObjectURL(formData.image)}
                    alt="Uploaded"
                    className="uploaded-image"
                  />
                ) : (
                  'Upload Image'
                )}
                <input
                  type="file"
                  accept="image/*"
                  className="file-input"
                  onChange={handleImageUpload}
                />
              </label>
            </div>
            <input
              type="text"
              name="name"
              className="full-name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="district"
              className="email-input" // Reusing classes for styling
              placeholder="District"
              value={formData.district}
              onChange={handleChange}
              required
            />
            <textarea
              name="details"
              className="message-input" // Reusing classes for styling
              placeholder="Details"
              value={formData.details}
              onChange={handleChange}
              required
            />

            <div className="button-group">
              <button type="submit" className="submit-button">Submit</button>
              <button type="button" className="clear-button" onClick={() => setFormData({ name: '', district: '', details: '', image: null })}>Clear </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetStart;
