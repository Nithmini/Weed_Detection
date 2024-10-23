import React from "react";
import "./css/Services.css";
import serviceImage1 from "./images/service5.png";
import serviceImage2 from "./images/service4.png";
import serviceImage3 from "./images/service6.png";
function Services() {
  return (
    <div className="app">
      <main>
        <section className="feedback-section">
          <h2>Our Service's</h2>
          <div className="feedback-cards">
            <div className="card-service ">
              <img
                src={serviceImage1}
                alt="person 1"
                className="card-image-service"
              />
              <p className="service-title"> Weed <br /> Identification</p>
              <p className="service-text">
                Weed identification involves<br /> recognizing different types of<br />unwanted plantsin your garden or <br />
                field, helping you choose the best<br />control method.

              </p>
            </div>

            <div className="card-service">
              <img
                src={serviceImage2}
                alt="person 1"
                className="card-image-service"
              />
              <p className="service-title">Information of <br />weeds</p>
              <p className="service-text">
              Learn detailed information about <br /> various weeds, their characteristics,<br /> and how to manage them effectively
               
              </p>
            </div>

            <div className="card-service">
              <img
                src={serviceImage3}
                alt="person 2"
                className="card-image-service"
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
