import React from 'react';
import { Link } from 'react-router-dom';
import './SetAppointment.css';

const SetAppointment = () => {
    return (
        <div id="pricing">
            <h2 className="text-primary">Service Pricelist</h2>
            <p className="pricelist-text">Explore our budget-friendly service pricelist & enjoy premium benefits regularly.</p>
            <div className="mx-5">
                <div className="card-group">
                    <div className="card border-info">
                        <div className="card-body">
                            <h3 className="card-title card-my-title text-info font-weight-normal mt-4">Dermatology Care</h3>
                            <p className="card-text mt-3">Corporate people love this.</p>
                            <h1 className="mt-3 mb-3">$400 <small className="price-interval mini-text text-warning">/day</small> </h1>
                            <ul className="list-group list-group-flush mt-4">
                                <li className="list-group-item">Chin Augmentation</li>
                                <li className="list-group-item">Eyelid Surgery</li>
                                <li className="list-group-item">Facelift</li>
                                <li className="list-group-item">DOT Therapy</li>
                                <li className="list-group-item">Brow Lift</li>
                            </ul>
                            <Link to="/pricing">
                                <button className="mt-4 btn btn-info">Choose</button>
                            </Link>
                        </div>
                    </div>
                    <div className="card border-info">
                        <h2 class="card-header bg-info text-white">
                            Trending Pick
                        </h2>
                        <div className="card-body mini-card-body">
                            <h5 className="card-title font-weight-bold">Fillers & Injectibles</h5>
                            <p className="card-text">Designed for young people.</p>
                            <h1>$300 <small className="text-warning mini-text price-interval">/day</small> </h1>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item mini-card-body">Chin Augmentation</li>
                                <li className="list-group-item mini-card-body">Eyelid Surgery</li>
                                <li className="list-group-item mini-card-body">Facelift</li>
                                <li className="list-group-item mini-card-body">DOT Therapy</li>
                                <li className="list-group-item mini-card-body">Brow Lift</li>
                            </ul>
                            <Link to="/pricing">
                                <button className="mt-3 btn btn-info">Choose</button>
                            </Link>
                        </div>
                    </div>
                    <div className="card border-info">
                    <div className="card-body">
                            <h3 className="card-title text-info font-weight-normal mt-4">Aesthetic Service</h3>
                            <p className="card-text mt-4">Customized for beauty loving person.</p>
                            <h1 className="mt-2 mb-3">$500 <small className="mini-text price-interval text-warning">/day</small> </h1>
                            <ul className="list-group list-group-flush ">
                                <li className="list-group-item">Chin Augmentation</li>
                                <li className="list-group-item">Eyelid Surgery</li>
                                <li className="list-group-item">Facelift</li>
                                <li className="list-group-item">DOT Therapy</li>
                                <li className="list-group-item">Brow Lift</li>
                            </ul>
                            <Link to="/pricing">
                                <button className="mt-4 btn btn-info">Choose</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SetAppointment;