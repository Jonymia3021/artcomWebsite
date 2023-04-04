import React from 'react';
import workDetails from './workDetails.css'; 
import img from '../../Images/Slider Images/img 3.png';

const WorkDetails = () => {
    return (
        <section id='work-details'>
            <div className="section-img-box">
                <h1>ADD-International</h1>
            </div>
            <div className="container">
                <div className="row">
                    <img src={img} alt="" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita aspernatur nesciunt sunt! Quaerat fugiat iste, eveniet suscipit unde quos non esse dicta! Ipsum quis repellendus quos aut repudiandae ab quasi ea porro quia excepturi doloremque dignissimos aliquid voluptate placeat ut optio, nobis maxime non. Aspernatur impedit deserunt minus minima nobis!</p>
                </div>
            </div>
        </section>
    );
};

export default WorkDetails;