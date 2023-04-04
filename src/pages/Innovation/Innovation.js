import React from 'react';
import innovation from './innovation.css'; 
import img from '../../Images/Our Clients_Page/ADD-Internation.png';

const Innovation = () => {
    return (
        <section id="innovation-page">
            <div className="section-img-box"></div>
            <div className="container">
                <div className="row">
                    <div className="section-title">
                        <h2>INNOVATION & TECH</h2>
                        <hr />
                    </div>
                </div>
                <div className="row innovator">
                    <h5>THE PIONEERS AND INNOVATORS</h5>
                    <div className="col-md-3 innovator-text">
                        <p>Over 5 decades Artistic Communication has crafted most number of brands and campaigns, also has been pioneering in creating many of the innovative communication solutions in the industry.</p>
                    </div>
                    <div className="col-md-3">
                        <div className="innvator-box">
                            <p>FIRST TVC</p>
                        </div>
                        <div className="innvator-box">
                            <p>FIRST SPONSORED TV PROGRAM</p>
                        </div>
                        <div className="innvator-box">
                            <p>FIRST INTERNATIONAL NETWORK</p>
                        </div>
                        <div className="innvator-box">
                            <p>FIRST COMIC BOOK & WEB COMIC</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="innvator-box">
                            <p>FIRST 360° IMC</p>
                        </div>
                        <div className="innvator-box">
                            <p>FIRST ELECTRONIC BILLBOARD</p>
                        </div>
                        <div className="innvator-box">
                            <p>FIRST REALITY SHOW</p>
                        </div>
                        <div className="innvator-box">
                            <p>FIRST CELEBRITY ENDORSEMENT</p>
                        </div>
                        <div className="innvator-box">
                            <p>FIRST BEAUTY PAGEANT</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="innvator-box">
                            <p>FIRST FULL-SERVICE AGENCY</p>
                        </div>
                        <div className="innvator-box">
                            <p>FIRST INTERNATIONAL SPORTS EVENT</p>
                        </div>
                        <div className="innvator-box">
                            <p>FIRST DIGITAL CONTENT</p>
                        </div>
                        <div className="innvator-box">
                            <p>FIRST BRANDED MOBILE CONTENT</p>
                        </div>
                    </div>
                </div>
                <div className="row our-partners">
                    <h5>OUR PARTNERS</h5>
                    <div className="partner-container">
                        <div className="partner-box">
                            <img src={img} alt="" />
                            <p>An Agile research Platform offering insights in real-time. It uncovers personalized & intelligent insights for marketing from data to realize smarter decision-making, smarter marketing, and higher ROI.</p>
                        </div>
                        <div className="partner-box">
                            <img src={img} alt="" />
                            <p>An Agile research Platform offering insights in real-time. It uncovers personalized & intelligent insights for marketing from data to realize smarter decision-making, smarter marketing, and higher ROI.</p>
                        </div>
                        <div className="partner-box">
                            <img src={img} alt="" />
                            <p>An Agile research Platform offering insights in real-time. It uncovers personalized & intelligent insights for marketing from data to realize smarter decision-making, smarter marketing, and higher ROI.</p>
                        </div>
                        <div className="partner-box">
                            <img src={img} alt="" />
                            <p>An Agile research Platform offering insights in real-time. It uncovers personalized & intelligent insights for marketing from data to realize smarter decision-making, smarter marketing, and higher ROI.</p>
                        </div>
                        <div className="partner-box">
                            <img src={img} alt="" />
                            <p>An Agile research Platform offering insights in real-time. It uncovers personalized & intelligent insights for marketing from data to realize smarter decision-making, smarter marketing, and higher ROI.</p>
                        </div>
                        <div className="partner-box">
                            <img src={img} alt="" />
                            <p>An Agile research Platform offering insights in real-time. It uncovers personalized & intelligent insights for marketing from data to realize smarter decision-making, smarter marketing, and higher ROI.</p>
                        </div>
                        <div className="partner-box">
                            <img src={img} alt="" />
                            <p>An Agile research Platform offering insights in real-time. It uncovers personalized & intelligent insights for marketing from data to realize smarter decision-making, smarter marketing, and higher ROI.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Innovation;