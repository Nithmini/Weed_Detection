import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/FeedbackList.css';

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  // Fetch feedback from backend when the component mounts
  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/feedback/'); // Fetch feedbacks from backend
        setFeedbacks(response.data); // Update state with feedback data
      } catch (err) {
        console.error('Error fetching feedback:', err);
      }
    };

    fetchFeedbacks();
  }, []);

  return (
    <div className="feedback-list-container">
      <h2>Feedback List</h2>
      <div className="feedback-cards-list">
        {feedbacks.length === 0 ? (
          <p>No feedback available.</p>
        ) : (
          feedbacks.map((feedback, index) => (
            <div className="feedback-card-list" key={index}>
              <div className="feedback-list-emoji">
                {/* Emoji based on the feedback */}
                {feedback.emoji === 'happy' && <span>😍</span>}
                {feedback.emoji === 'neutral' && <span>🙂</span>}
                {feedback.emoji === 'sad' && <span>😟</span>}
              </div>
              <div className="feedback-content-list">
                <h3>{feedback.name}</h3>
                <p>{feedback.description}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FeedbackList;
