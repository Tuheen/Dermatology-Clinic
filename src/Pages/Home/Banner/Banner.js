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
                        src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className="banner-tag">Explore Happiness</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{width: '100%'}}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg2JRUjhIruRSN7TEyr5RXejng3_OqzsUR_4rKBJNB-gY-4dwF5oAt5_IQG35deYxMQCc&usqp=CAU"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3 className="banner-tag">Explore Life</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100" style={{width: '100%'}}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtcR7JlMXyaxQfwfls4Hm6u8eylbV5tBmh7bzc2w1-hl8-N7MgIRaSlE2de6k7HFwbib4&usqp=CAU"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3 className="banner-tag">Explore Yourself</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
};

export default Banner;