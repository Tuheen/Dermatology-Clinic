import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="" id="footer">
            <div>
                <div className="card-deck">
                    <div className="card border-0">
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold text-info">Services</h5>
                            <div>
                                <h6 className="text-info font-weight-light">Dermatology Care</h6>
                                <h6 className="text-info font-weight-light">Laser Services</h6>
                                <h6 className="text-info font-weight-light">Fillers & Injectables</h6>
                                <h6 className="text-info font-weight-light">Aesthetic Services</h6>
                            </div>
                        </div>
                    </div>
                    <div className="card border-0">
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold text-info">Company</h5>
                            <div>
                                <h6 className="text-info font-weight-light">Services</h6>
                                <h6 className="text-info font-weight-light">About Us</h6>
                                <h6 className="text-info font-weight-light">Dermatologists</h6>
                                <h6 className="text-info font-weight-light">Contact Us</h6>
                            </div>
                        </div>
                    </div>
                    <div className="card border-0">
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold text-info">Our Social Media</h5>
                            <div>
                                <h6 className="text-info font-weight-light">YouTube</h6>
                                <h6 className="text-info font-weight-light">Instagram</h6>
                                <h6 className="text-info font-weight-light">Facebook</h6>
                                <h6 className="text-info font-weight-light">Twitter</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-info">
                <h6 className="copyright py-2 text-white">Copyright Dermacare</h6>
            </div>
        </div>
    );
};

export default Footer;