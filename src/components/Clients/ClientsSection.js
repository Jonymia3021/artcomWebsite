import React from 'react';
import img from '../../Images/Our Clients_Page/ACI.png';
import clientsSection from './clientsSection.css'

const ClientsSection = () => {
    return (
        <div className="clients-container">
            <div className="client-img-bx">
                <img src={img} alt="" />
            </div>
            <div className="client-img-bx">
                <img src={img} alt="" />
            </div>
            <div className="client-img-bx">
                <img src={img} alt="" />
            </div>
            <div className="client-img-bx">
                <img src={img} alt="" />
            </div>
            <div className="client-img-bx">
                <img src={img} alt="" />
            </div>
            <div className="client-img-bx">
                <img src={img} alt="" />
            </div>
            <div className="client-img-bx">
                <img src={img} alt="" />
            </div>
            <div className="client-img-bx">
                <img src={img} alt="" />
            </div>
            <div className="client-img-bx">
                <img src={img} alt="" />
            </div>
            <div className="client-img-bx">
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default ClientsSection;