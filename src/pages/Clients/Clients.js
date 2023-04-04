import React from 'react';
import clients from './clients.css';
import ClientsSection from '../../components/Clients/ClientsSection';

const Clients = () => {
    return (
        <section id="clients-page">
            <div className="section-img-box"></div>
            <div className="container">
                <div className="row">
                    <div className="section-title">
                        <h2>clients</h2>
                        <hr />
                        <p>THE BRANDS THAT SHARE OUR BELIEF IN THE POWER OF <br /> STORIES</p>
                    </div>
                </div>
                <div className="row">
                    <ClientsSection></ClientsSection>
                </div>
            </div>
        </section>
    );
};

export default Clients;