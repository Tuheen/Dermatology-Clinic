import React from 'react';
import { Link } from 'react-router-dom';
import './Dermatologist.css';

const Dermatologist = ({dermatologist}) => {
    const { id, img, name, expertise } = dermatologist;
    return (
        <div className="col-lg-4 col-sm-6 col-12">
            <img className="doc-img rounded-circle pt-5" src={img} alt=""  />
            <h3 className="mt-3">{name}</h3>
            <h5 className="text-danger">{expertise}</h5>
            <Link to={`/docdetails/${id}`}>
                <button className="btn btn-info text-white font-weight-bold mt-3">Consult <br /> {name}</button>
            </Link>
        </div>
    );
};

export default Dermatologist;