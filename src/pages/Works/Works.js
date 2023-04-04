import React from 'react';
import work from './work.css';
import img from '../../Images/Our Clients_Page/ADD-Internation.png';
import { Link } from 'react-router-dom';

const Works = () => {
    return (
        <section id="work-page">
            <div className="section-img-box"></div>
            <div className="container">
                <div className="row">
                    <div className="section-title">
                        <h2>Work</h2>
                        <hr />
                        <p>THE BRANDS THAT SHARE OUR BELIEF IN THE POWER OF <br /> STORIES</p>
                    </div>
                </div>
                <div className="row">
                    <div className="work-container">
                        <Link to={'/our-work/' + 'ADD-International'} className="work-box">
                            <img src={img} alt="" />
                            <h4>ADD-International</h4>
                        </Link>
                        <Link to={'/our-work/' + 'ADD-International'} className="work-box">
                            <img src={img} alt="" />
                            <h4>ADD-International</h4>
                        </Link>
                        <Link to={'/our-work/' + 'ADD-International'} className="work-box">
                            <img src={img} alt="" />
                            <h4>ADD-International</h4>
                        </Link>
                        <Link to={'/our-work/' + 'ADD-International'} className="work-box">
                            <img src={img} alt="" />
                            <h4>ADD-International</h4>
                        </Link>
                        <Link to={'/our-work/' + 'ADD-International'} className="work-box">
                            <img src={img} alt="" />
                            <h4>ADD-International</h4>
                        </Link>
                        <Link to={'/our-work/' + 'ADD-International'} className="work-box">
                            <img src={img} alt="" />
                            <h4>ADD-International</h4>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Works;