import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const {serviceId} = useParams();

    return (
        <div className="">
            <div className="card text-white bg-warning mb-3">
                <div className="card-header">Please submit your information</div>
                <div className="card-body">
                    <label htmlFor="Your Name"> Your Name</label>
                    <input type="text" />
                    <input value="submit" />
                </div>
            </div>
        </div>
    );
};

export default Booking;