import React from "react";
import aboutImage from "./images/about-image.png";
import "./css/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-us-section">

        <h1 className="about-us-title">About Us</h1>


        <p className="about-us-text">
          “We provide a service to help you identify bothersome weeds in your garden using advanced
          image recognition technology and give you advice on how to effectively eliminate them.”
        </p>


        <div className="about-us-image-container">
          <div className="image-background"></div>
          <img src={aboutImage} alt="About Us" className="about-us-image" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
