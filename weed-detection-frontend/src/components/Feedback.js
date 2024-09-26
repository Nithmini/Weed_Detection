import React from "react";
import "./css/Feedback.css";
import farmerImage from "./images/farmer.png";
import girlImage from "./images/girl.png";

function Feedback() {
  return (
    <div className="feedback-page">
      <main>
        <section className="feedback-section">
          <h2>Feedback</h2>
          <div className="feedback-cards">
            <div className="card">
              <img
                src={farmerImage}
                alt="person 1"
                className="card-image"
              />
              <p className="feedback-text">
                This weed identification tool is a game-changer for my crop!
              </p>
            </div>

            <div className="card">
              <img
                src={girlImage}
                alt="person 2"
                className="card-image"
              />
              <p className="feedback-text">
                This weed<br />
                identification tool is<br />
                a game-changer for<br />
                my crop!
              </p>
            </div>
          </div>

          <button className="feedback-button">  <span>Give Feedback</span></button>
        </section>
      </main>
    </div>
  );
}

export default Feedback;
