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
          <img src="https://res.cloudinary.com/dorcq99nr/image/upload/v1652809168/AgriProducts/sign_up_t2t08q.gif" fluid  alt="About Us" className="about-us-image" />
          
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
