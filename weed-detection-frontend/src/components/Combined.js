import axios from 'axios';
import React, { useState } from 'react';

const WeedPrediction = () => {
  const [file, setFile] = useState(null);
  const [applicationRate, setApplicationRate] = useState('');
  const [effectiveness, setEffectiveness] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle file change event
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!file || !applicationRate || !effectiveness) {
      setError('Please provide all the inputs!');
      return;
    }

    setError(null);
    setLoading(true);

    // Prepare the form data
    const formData = new FormData();
    formData.append('file', file);
    formData.append('Application_Rate', applicationRate);
    formData.append('Effectiveness', effectiveness);

    try {
      // Send the request to the Flask backend
      const response = await axios.post('http://127.0.0.1:5000/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Handle the response
      setResult(response.data);
    } catch (err) {
      setError('Failed to get a prediction. Please try again.');
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <h2>Weed Prediction and Herbicide Recommendation</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Upload Image of Weed:</label>
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </div>

        <div>
          <label>Application Rate:</label>
          <select
            value={applicationRate}
            onChange={(e) => setApplicationRate(e.target.value)}
          >
            <option value="">Select Application Rate</option>
            <option value="1.2 L/ha">1.2 L/ha</option>
            <option value="1.5 kg/ha">1.5 kg/ha</option>
            <option value="2.0 L/ha">2.0 L/ha</option>
            <option value="2.5 L/ha">2.5 L/ha</option>
            <option value="3.5 L/ha">3.5 L/ha</option>
          </select>
        </div>

        <div>
          <label>Effectiveness (%):</label>
          <select
            value={effectiveness}
            onChange={(e) => setEffectiveness(e.target.value)}
          >
            <option value="">Select Effectiveness</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Predicting...' : 'Submit'}
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {result && (
        <div>
          <h3>Prediction Result:</h3>
          <p><strong>Predicted Weed Variety:</strong> {result.predicted_weed_variety}</p>
          <p><strong>Recommended Herbicide:</strong> {result.predicted_herbicide}</p>
        </div>
      )}
    </div>
  );
};

export default WeedPrediction;
