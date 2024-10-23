import React, { useState } from 'react';
import axios from 'axios';
import './css/AddFeedback.css';
import { useNavigate } from 'react-router-dom';


const AddFeedback = () => {
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();

  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emoji);
  };

  const handleSubmit = async () => {
    if (!name || !description || !selectedEmoji) {
      setError("Please fill all the fields.");
      return;
    }

    // Prepare the feedback data
    const feedbackData = {
      name,
      description,
      emoji: selectedEmoji,
    };

    try {
      // Send the POST request to the backend using axios
      const response = await axios.post('http://localhost:5000/feedback/add', feedbackData);

      if (response.status === 200) {
        setSuccessMessage("Feedback submitted successfully!");
        setError(null);
        setName('');
        setDescription('');
        setSelectedEmoji(null);

        // Redirect to feedback list after 2 seconds
        setTimeout(() => {
          navigate('/feedbackList');
        }, 2000); // 2 seconds delay before redirecting
      }
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.error || "Failed to submit feedback.");
      } else {
        setError("Failed to submit feedback. Please try again.");
      }
      setSuccessMessage(null);
    }
  };


  return (
    <div className="addfeedback-container">
      <h2>Add FeedBack</h2>
      <div className="addfeedback-card">
        <p>Welcome Your Feedback?</p>

        <div className="emoji-container">
          <span
            className={`emoji ${selectedEmoji === 'happy' ? 'selected' : ''}`}
            onClick={() => handleEmojiClick('happy')}
          >
            😍
          </span>

          <span
            className={`emoji ${selectedEmoji === 'neutral' ? 'selected' : ''}`}
            onClick={() => handleEmojiClick('neutral')}
          >
            🙂
          </span>
          <span
            className={`emoji ${selectedEmoji === 'sad' ? 'selected' : ''}`}
            onClick={() => handleEmojiClick('sad')}
          >
            😟
          </span>
        </div>

        <input
          type="text"
          placeholder="Your Name"
          className="add-feedback-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          id="feedback-input"
          placeholder="Your feedback"
          className="add-feedback-input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {/* Error and Success Messages */}
        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <div className="feedback-button-group">
          <button
            className="feedback-cancel-button"
            onClick={() => {
              setName('');
              setDescription('');
              setSelectedEmoji(null);
              setError(null);
              setSuccessMessage(null);
            }}
          >
            Cancel
          </button>
          <button className="feedback-save-button" onClick={handleSubmit}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default AddFeedback;

