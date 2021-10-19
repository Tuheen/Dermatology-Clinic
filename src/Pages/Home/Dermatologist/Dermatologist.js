import React from 'react';
import { Link } from 'react-router-dom';

const Dermatologist = ({dermatologist}) => {
    const { id, img, name, expertise } = dermatologist;
    return (
        <div className="col-lg-4 col-sm-6 col-12">
            <img src={img} alt=""  />
            <h3>{name}</h3>
            <h5 className="text-danger">{expertise}</h5>
            <Link to={`/docdetails/${id}`}>
                <button className="btn btn-warning">Book {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Dermatologist;