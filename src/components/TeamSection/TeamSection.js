import React from 'react';
import teamSection from './teamSection.css';
import team1 from '../../Images/Team/1. Masud Nikson, PhD _Creative Head.jpg';
import team2 from '../../Images/Team/2. Jakir Hossain Robel_Operations Head.jpg';
import team3 from '../../Images/Team/3. Ouishi Prodhan_Communications Head.jpg';
import team4 from '../../Images/Team/4. Zunaed Parvez_Productions Head.jpg';
import team5 from '../../Images/Team/5. Arma-A-Nahian_Head of Post Production.jpg';
import team6 from '../../Images/Team/6. Ehshanul Tanvir_Visualizer.jpg';

const TeamSection = () => {
    return (
        <div className="container team-section">
            <div className="section-title">
                <h2>team</h2>
                <hr />
                <p>
                        INTRODUCING THE ADMEN BEHIND THE OLDEST AND ONE <br />
                         OF THE LARGEST COMMUNICATION AGENCIES IN <br />
                          BANGLADESH
                </p>
            </div>
            <div className="row">
                <div className="team-box-container">
                    <div className="team-box">
                        <img src={team1} alt="" />
                        <div className="team-box-text">
                            <h3>Masud Nikson, PhD</h3>
                            <p>Creative Head</p>
                        </div>
                    </div>
                    <div className="team-box">
                        <img src={team2} alt="" />
                        <div className="team-box-text">
                            <h3>Jakir Hossain Robel</h3>
                            <p>Operations Head</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="team-box-container">
                    <div className="team-box">
                        <img src={team3} alt="" />
                        <div className="team-box-text">
                            <h3>Ouishi Prodhan</h3>
                            <p>Communications Head</p>
                        </div>
                    </div>
                    <div className="team-box">
                        <img src={team4} alt="" />
                        <div className="team-box-text">
                            <h3>Zunayed Parvez</h3>
                            <p>Productions Head</p>
                        </div>
                    </div>
                    <div className="team-box">
                        <img src={team5} alt="" />
                        <div className="team-box-text">
                            <h3>Arma-A-Nahian</h3>
                            <p>Head of Post Productions</p>
                        </div>
                    </div>
                    <div className="team-box">
                        <img src={team6} alt="" />
                        <div className="team-box-text">
                            <h3>Ehshanul Tanvir</h3>
                            <p>Visualizer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamSection;