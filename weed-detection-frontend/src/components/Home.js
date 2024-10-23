import React from 'react';
import weedImage1 from "./images/Crabgrass.png";
import weedImage2 from "./images/Nutgrass.jpg";
import weedImage3 from "./images/Purslane2.jpg";
import weedImage4 from "./images/Morningglorynew.jpg";
import weedImage5 from "./images/Goosegrass.jpeg";
import weedImage6 from "./images/Spiny Amaranth.jpg";
import serviceImage1 from "./images/service1.jpg";
import serviceImage2 from "./images/service10.png";
import serviceImage3 from "./images/service11.png";
import homeImage1 from "./images/pikaso_edit_weed-detection-background-image (1).jpeg";
import WeedsCarousel from './WeedsCarousel';
import { Link } from 'react-router-dom';


import './css/Home.css';

const Home = () => {
 
  return (
    <div className="homepage-main-container">
    <div className="homepage-container">
      {/* Header Section */}
  {/* Header Section */}
    <section className="header-section">
        <div className="header-content">
          <div className="header-text">
            <h1>Say Goodbye to <br /> Weeds</h1>
            <Link to="/imageUpload" style={{ textDecoration: 'none' }} className="garden-button">
            Get Start
            </Link>
            <Link to="/herbicidePredictor" style={{ textDecoration: 'none' , marginLeft: '10px' }} className="garden-button">
            Herbicide Predictor
            </Link>
         
          </div>
          <div className="header-image">
          <img  src="https://res.cloudinary.com/dorcq99nr/image/upload/v1652809168/AgriProducts/sign_up_t2t08q.gif" alt="Garden" />
          </div>
        </div>
      </section>

      {/* Weeds Section 
      <section className="weeds-section">
        <h2>Weeds</h2>
        <p>"Understanding the Impact of Weeds on Gardens, Lawns, and Crop Fields: Challenges and Effective Management Strategies"</p>
        <div className="weed-cards">
        <div className="weed-card">
        <div className="weed-card-top">
        
        </div>
        <div className="weed-card-content">
         <img src={weedImage1} alt="Crabgrass" />
         <h3>Crabgrass</h3>
        <p>This low-growing weed spreads quickly and can form dense mats.</p>
        </div>
        </div>
        <div className="weed-card">
        <div className="weed-card-top">
        
        </div>
        <div className="weed-card-content">
        <img src={weedImage2} alt="Nutgrass" />
        <h3>Nutgrass</h3>
        <p>This stubborn weed has underground tubers that make it difficult to eradicate. It loves moist conditions.</p>
        </div>
        </div>
        <div className="weed-card">
        <div className="weed-card-top">
       
        </div>
        <div className="weed-card-content">
        <img src={weedImage3} alt="Purslane" />
        <h3>Purslane</h3>
        <p>Succulent with fleshy leaves, purslane can tolerate drought. It produces many seeds.</p>
        </div>
        </div>
        <div className="weed-card">
        <div className="weed-card-top">
       
        </div>
        <div className="weed-card-content">
        <img src={weedImage4} alt="Morningglory" />
        <h3>Morningglory</h3>
        <p>A vigorous climber that can smother other plants. It produces large, showy flowers.</p>
        </div>
        </div>
        <div className="weed-card">
        <div className="weed-card-top">
       
        </div>
        <div className="weed-card-content">
        <img src={weedImage5} alt="Goosegrass" />
        <h3>Goosegrass</h3>
        <p>A tough, grassy weed that forms dense mats. It's often found in lawns and gardens.
        </p>
        </div>
        </div>
        <div className="weed-card">
        <div className="weed-card-top">
        
        </div>
        <div className="weed-card-content">
        <img src={weedImage6} alt="Spiny Amaranth" />
        <h3>Spiny Amaranth</h3>
        <p>This upright weed has thorny stems and small, green flowers. It's a prolific seed producer.</p>
        </div>
        </div>

          
        </div>
      </section>*/}
        <section className="weeds-section">
  <div className="weeds-text">
    <h2><b>Common Weeds</b></h2>
    <p>"They are quick to grow and can quickly out-compete with crops for resources like water, sun & essential nutrients. They impair the health and aesthetics of plants and crops. Understand the problems caused by weeds and how to manage them for a lush, flourishing landscape."</p>
  </div>
  <div className="weeds-carousel">
    <WeedsCarousel />
  </div>
</section>


      {/* About Us Section */}
      <section className="about-u-section-home">
        <h2><b>Who We Are</b></h2>
        <p>"Your Trusted Source for Effective Weed Detection and <br></br> Management Solutions"</p>
        <Link to="/aboutus" style={{ textDecoration: 'none' }} className="see-more-button">
        About Us
        </Link>
      </section>

      {/* Our Services Section */}
      <section className="our-services-section">
        <h2><b>Our Services</b></h2>
        <div className="services-cards">
          <div className="service-card">
            <img src={serviceImage1} alt="Weed Identification" />
            <h3>Weed Identification</h3>
          </div>
          <div className="service-card">
            <img src={serviceImage2} alt="Information on Weeds" />
            <h3>Information on Weeds</h3>
          </div>
          <div className="service-card">
            <img src={serviceImage3} alt="Medication for Weeds" />
            <h3>Medication for the Weeds</h3>
          </div>
        </div>
        <Link to="/services" style={{ textDecoration: 'none' }} className="see-more-button">
        See more
       </Link>
      
      </section>
    </div>
    </div>
  );
};

export default Home;