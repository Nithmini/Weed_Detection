import React from "react";
import "./css/Feedback.css";
import farmerImage from "./images/farmer.png";
import girlImage from "./images/girl.png";
import { Link } from 'react-router-dom';

function Feedback() {
  return (
    <div className="feedback-page">
      <main>
        <section className="feedback-section">
          <h2>Feedback</h2>
          <div className="feedback-cards">
            <div className="card-feedback">
              <img
                src={farmerImage}
                alt="person 1"
                className="card-image"
              />
              <p className="feedback-text">
                This weed identification tool is a game-changer for my crop!
              </p>
            </div>

            <div className="card-feedback">
              <img
                src={girlImage}
                alt="person 2"
                className="card-image"
              />
              <p className="feedback-text">
                This tool has transformed <br />the way I manage my crops.
                
              </p>
            </div>
          </div>

          <button className="feedback-button">  <Link to="/addfeedback" className="button-link">Give Feedback</Link></button>
        </section>
      </main>
    </div>
  );
}

export default Feedback;
