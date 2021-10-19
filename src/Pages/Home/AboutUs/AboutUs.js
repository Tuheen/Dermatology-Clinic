import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div>
            <h2 className="text-primary">Explore Us <br /> in Detail</h2>
            <div className="about-us">
                <div><img src="https://image.freepik.com/free-vector/best-medical-specialists-design-with-smiling-doctors-nurses-various-poses-cartoon-retro-style_1284-17681.jpg" alt="" srcset="" /></div>
                <h4 className="text-info justify-content-center mt-5 pt-5 my-5 py-5">Within the Specialty Excellence recipient lists, we further distinguish the nation’s top hospitals for specialty care. In 14 specialty areas, we highlight hospitals that stand out as America’s 100 Best Hospitals for Specialty Care™. For Cosmetic Surgery, Surgical Care and other skin Surgery, we spotlight recipients among America’s 50 Best Hospitals for Specialty Care™.</h4>
            </div>
        </div>
    );
};

export default AboutUs;