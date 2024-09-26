import React from "react";
import "./css/Services.css";
import girlImage from "./images/serviceGirl.png";

function Services() {
  return (
    <div className="app">
      <main>
        <section className="feedback-section">
          <h2>Our Service's</h2>
          <div className="feedback-cards">
            <div className="card">
              <img
                src={girlImage}
                alt="person 1"
                className="card-image"
              />
              <p className="service-title"> Weed <br /> Identification</p>
              <p className="service-text">
                Weed identification involves<br /> recognizing different types of<br />unwanted plantsin your garden or <br />
                field, helping you choose the best<br />control method.

              </p>
            </div>

            <div className="card">
              <img
                src={girlImage}
                alt="person 1"
                className="card-image"
              />
              <p className="service-title">Information of <br />weeds</p>
              <p className="service-text">
                Weed identification involves <br />recognizing different types of <br />unwanted plantsin your garden or <br />field, helping you choose the best<br />
                control method.
              </p>
            </div>

            <div className="card">
              <img
                src={girlImage}
                alt="person 2"
                className="card-image"
              />
              <p className="service-title">Weedicides<br /> for the Weeds</p>
              <p className="service-text">
                Weedicides are chemical<br />substances used to control<br />unwanted plant growth in<br /> gardens and fields.
              </p>
            </div>
          </div>


        </section>
      </main>
    </div>
  );
}

export default Services;
