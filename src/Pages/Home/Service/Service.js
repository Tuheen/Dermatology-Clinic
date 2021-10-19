import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { id, name, fee, description, img, duration } = props.service;
    return (
        <div className="service pb-5">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>${fee}</h5>
            <p className="px-3">{description}</p>
            <h5>{duration} Hours</h5>
            <Link to={`/booking/${id}`}>
                <button className=" btn btn-warning">Book {name.toLowerCase()}</button>
            </Link>

        </div>
    );
};

export default Service;