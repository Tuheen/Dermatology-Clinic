import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="bg-info mt-5 py-5 border border-dark" id="footer">
            <div className="d-flex bg-info justify-content-center mx-5 px-5 footer" id="footer">
                <div className="card bg-info mt-5mr-5" style={{width: '18rem'}}>
                    <div className="card-header text-white font-weight-bold">
                        Services
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item mini-card-body text-white">Dermatology Care</li>
                        <li className="list-group-item mini-card-body text-white">Laser Services</li>
                        <li className="list-group-item mini-card-body text-white">Aesthetic Services</li>
                        <li className="list-group-item mini-card-body text-white">Fillers & Injectables</li>
                    </ul>
                </div>
                <div className="card bg-info mid-footer" style={{width: '18rem'}}>
                    <div className="card-header text-white font-weight-bold">
                        Company
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item mini-card-body text-white">Service</li>
                        <li className="list-group-item mini-card-body text-white">About Us</li>
                        <li className="list-group-item mini-card-body text-white">Pricing</li>
                        <li className="list-group-item mini-card-body text-white">Contact Us</li>
                    </ul>
                </div>
                <div className="card bg-info text-white ml-5" style={{width: '18rem'}}>
                    <div className="card-header font-weight-bold">
                        Our Social Media
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item mini-card-body text-white">YouTube</li>
                        <li className="list-group-item mini-card-body text-white">Instagram</li>
                        <li className="list-group-item mini-card-body text-white">Facebook</li>
                        <li className="list-group-item mini-card-body text-white">Twitter</li>
                    </ul>
                </div>
            </div>
            <div className="bg-info">
                <h6 className="copyright text-white">Copyright Dermacare</h6>
            </div>
        </div>
    );
};

export default Footer;