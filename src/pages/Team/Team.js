import React from 'react';
import TeamSection from '../../components/TeamSection/TeamSection';
import team from './team.css';
import Slider from '../../components/Slider/Slider';

const Team = () => {
    return (
        <section className='team-page'>
            <div className="section-img-box"></div>
            <TeamSection></TeamSection>
            <div className="container-fluid">
                <div className="section-title">
                    <h2>Our culture</h2>
                    <hr />
                    <p>
                        Here is a glimpse of the madness that is our culture. Or should we say, our Adness?
                    </p>
                </div>
                <Slider></Slider>
            </div>
        </section>
    );
};

export default Team;