import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import SetAppointment from '../SetAppointment/SetAppointment';
import Dermatologists from './../Dermatologists/Dermatologists';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Services></Services>
            <Dermatologists></Dermatologists>
            <SetAppointment></SetAppointment>
        </div>
    );
};

export default Home;