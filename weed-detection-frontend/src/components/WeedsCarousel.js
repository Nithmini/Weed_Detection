import React from 'react';
import { Carousel } from 'react-bootstrap';
import './css/WeedsCarousel.css';
import weedImage1 from "./images/Crabgrass.png";
import weedImage5 from "./images/Goosegrass.jpeg";
import weedImage4 from "./images/Morningglorynew.jpg";
import weedImage2 from "./images/Nutgrass.jpg";
import weedImage3 from "./images/Purslane2.jpg";
import weedImage6 from "./images/Spiny Amaranth.jpg";
const WeedsCarousel = () => {
    return (
        <div className="container">
            <Carousel interval={2000}>
                {/* First Slide */}
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={weedImage1}
                        alt="Crabgrass"
                        style={{ maxHeight: '500px' }}
                    />
                    <Carousel.Caption>
                        <h5>Crabgrass</h5>
                        <p>This low-growing weed spreads quickly and can form dense mats.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* Second Slide */}
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={weedImage2}
                        alt="Nutgrass"
                        style={{ maxHeight: '500px' }}
                    />
                    <Carousel.Caption>
                        <h5>Nutgrass</h5>
                        <p>This stubborn weed has underground tubers that make it difficult to eradicate.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* Third Slide */}
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={weedImage3}
                        alt="Purslane"
                        style={{ maxHeight: '500px' }}
                    />
                    <Carousel.Caption>
                        <h5>Purslane</h5>
                        <p>Succulent with fleshy leaves, purslane can tolerate drought. It produces many seeds.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* Fourth Slide */}
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={weedImage4}
                        alt="Morningglory"
                        style={{ maxHeight: '500px' }}
                    />
                    <Carousel.Caption>
                        <h5>Morningglory</h5>
                        <p>A vigorous climber that can smother other plants. It produces large, showy flowers.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* Fifth Slide */}
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={weedImage5}
                        alt="Goosegrass"
                        style={{ maxHeight: '500px' }}
                    />
                    <Carousel.Caption>
                        <h5>Goosegrass</h5>
                        <p>A tough, grassy weed that forms dense mats. Often found in lawns and gardens.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* Sixth Slide */}
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={weedImage6}
                        alt="Spiny Amaranth"
                        style={{ maxHeight: '500px' }}
                    />
                    <Carousel.Caption>
                        <h5>Spiny Amaranth</h5>
                        <p>This upright weed has thorny stems and small, green flowers. It's a prolific seed producer.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default WeedsCarousel;
