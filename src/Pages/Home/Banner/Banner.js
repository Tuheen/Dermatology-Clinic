import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <>
            <div id="banner">
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100" style={{width: '100%'}}
                        src="https://image.freepik.com/free-photo/woman-wellness-center-during-skin-treatment_23-2148825329.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{width: '50%'}}
                        src="https://image.freepik.com/free-photo/woman-getting-cosmetic-treatment-wellness-center_23-2148825298.jpg"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100" style={{width: '50%'}}
                        src="https://image.freepik.com/free-photo/beautiful-woman-wellness-center-during-skin-treatment_23-2148825327.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
};

export default Banner;