import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <div id="banner" className="mb-5 banner">
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100" style={{width: '100%'}}
                        src="https://image.freepik.com/free-photo/woman-wellness-center-during-skin-treatment_23-2148825329.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Services for Clients</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{width: '100%'}}
                        src="https://image.freepik.com/free-photo/woman-getting-cosmetic-treatment-wellness-center_23-2148825298.jpg"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Services for Clients</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100" style={{width: '100%'}}
                        src="https://image.freepik.com/free-photo/beautiful-woman-wellness-center-during-skin-treatment_23-2148825327.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Services for Clients</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
};

export default Banner;