import React from 'react';
import service from './service.css';
import ServiceSection from '../../components/ServiceSection/ServiceSection';

const Services = () => {

    return (
        <section className='service-section'>
            <div className="section-img-box"></div>
            <div className="container">
                <div className="section-title">
                    <h2>services</h2>
                    <hr />
                </div>
                <ServiceSection></ServiceSection>
            </div>
        </section>
    );
};

export default Services;