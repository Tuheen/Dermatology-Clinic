import React, { useEffect, useState } from 'react';
import Booking from '../../Booking/Booking/Booking';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [ services, setServices ] = useState([])
    useEffect( () => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])

    return (
        <div id="services">
            <h2 className="mb-5 mt-5 bg-info p-5 text-white">Our Services</h2>
            <div className="service-container">
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)
            }

        </div>
        </div>
    );
};

export default Services;