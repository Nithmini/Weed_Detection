import axios from 'axios';
import React, { useState } from 'react';

const HerbicidePredictor = () => {
  const [weedVariety, setWeedVariety] = useState('');
  const [applicationRate, setApplicationRate] = useState('');
  const [effectiveness, setEffectiveness] = useState('');
  const [region, setRegion] = useState('');
  const [predictedHerbicide, setPredictedHerbicide] = useState(null);
  const [error, setError] = useState(null);

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setPredictedHerbicide('');


    const inputData = {
      Weed_Variety: weedVariety,
      Application_Rate: parseFloat(applicationRate),
      Effectiveness: effectiveness,
      Region: region
  };

         try {
            const response = await axios.post('http://127.0.0.1:8001/predictHerb', inputData);
            if (response.data.success) {
                setPredictedHerbicide(response.data.predicted_herbicide);
                console.log(response.data.predicted_herbicide);
            } else {
                setError(response.data.error);
            }
        } catch (err) {
            setError('Error communicating with the backend.');
        }
    };

  return (
   
    <div className="contact-page">
    <div className="contact-container">
        <h1 className="contact-title">Herbicide Prediction</h1>
        <div></div>
        <div className="card">
          <form className="getStart-form" onSubmit={handleSubmit}>
        <div>
          <label>
            
            <input
              type="text"
               className="full-name"
                placeholder="Weed Variety"
              value={weedVariety}
              onChange={(e) => setWeedVariety(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
         
            <input
              type="number"
               className="full-name"
               placeholder="Application Rate"
              value={applicationRate}
              onChange={(e) => setApplicationRate(e.target.value)}
              required
            />
         
        </div>
        <div>
       
            <input
              type="text"
              className="full-name"
               placeholder="Effectiveness"
              value={effectiveness}
              onChange={(e) => setEffectiveness(e.target.value)}
              required
            />
         
        </div>
        <div>
          <input
              type="text"
              className="full-name"
               placeholder="Region"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              required
            />
        </div>
        <button type="submit" className="submit-button" style={{ marginLeft: '200px' }}>Predict</button>
           
        </form>

        {predictedHerbicide && <h2 style={{ color: 'green', marginTop:'50px' , marginLeft:'100px'}}>Predicted Herbicide: {predictedHerbicide}</h2>}
            {error && <h3 style={{ color: 'red' }}>{error}</h3>}
        </div>

    </div>
    </div>
  );
};

export default HerbicidePredictor;
