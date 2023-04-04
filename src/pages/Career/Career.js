import React from 'react';
import JobSection from '../../components/JobSection/JobSection';
import career from './career.css';

const Career = () => {
    return (
        <section id="career-page">
            <div className="section-img-box"></div>
            <div className="container-fluid">
                <div className="row">
                    <div className="section-title">
                        <h2>career</h2>
                        <hr />
                        <p>Where to start? <br />
                         First, follow us on <a href="https://facebook.com/artcombdl/">Facebook</a>, <a href="https://www.linkedin.com/in/artistic-communication-8b65aa107?trk=public_profile_browsemap&originalSubdomain=bd">Linkedin</a> and subscribe to our <a href="https://youtube.com/c/artcombd">Youtube</a> channel. </p>
                    </div>
                </div>
                <div className="row job-row">
                    <h5>See The Job Recruitment</h5>
                    <div className="job-container">
                        <JobSection></JobSection>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Career;