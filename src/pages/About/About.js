import React from 'react';
import about from './about.css';
import ServiceSection from '../../components/ServiceSection/ServiceSection';

const About = () => {
    return (
        <section id="about-page">
            <div className="section-img-box"></div>
            <div className="container-fluid">
                <div className="row">
                    <div className="section-title">
                        <h2>ABOUT US</h2>
                        <hr />
                        <p>
                            AS STORYTELLERS, THE IDEA IS TO INHALE INSPIRATION AND <br />
                            EXHALE INNOVATION. WE STRONGLY BELIEVE IN CONSTANT AND<br />
                            CONTINUOUS INNOVATION TO ELIMINATE ANYTHING CLOSE TO<br />
                            BORING AND REDISCOVERING NEW PERSPECTIVES TO TELL A <br />
                            STORY.
                        </p>
                    </div>
                </div>
                <div className="row about-philosophy">
                    <div className="section-title">
                        <h2>PHILOSOPHY</h2>
                        <hr />
                        <p>
                            Ever heard a story that changed your life? We believe stories have that ability. We believe brands have that ability too. That’s why we’re here. We’re thinkers who are constantly adapting to changing times while maintaining extraordinary paradigms. We love a challenge; the greater the problem, the more fascinated we are. Think about it, everything started with an idea.
                        </p>
                    </div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/IU7ik63sQdA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className="row our-values">
                    <div className="section-title">
                        <h2>OUR VALUES</h2>
                        <hr />
                        <p>
                            We Ideaholics and the entity itself is shaped by our 4 core values. <br />
                            And adapting these values is what sets us apart and generates our madness.
                        </p>
                    </div>
                    <div className="value-container">
                        <div className="value-box">
                            <div className='col-3 value-icon'>
                                <i className="bi bi-patch-question"></i>
                            </div>
                            <div className='value-text'>
                                <h4>CURIOUS</h4>
                                <p>
                                    We are restlessly curious about what can be discovered from the people and cultures of the world, keeping our eyes and ears wide open. 
                                </p>
                            </div>
                        </div>
                        <div className="value-box">
                            <div className='col-3 value-icon'>
                                <i className="bi bi-bounding-box"></i>
                            </div>
                            <div className='value-text'>
                                <h4>COLLABORATIVE</h4>
                                <p>
                                    Artistic Communication is the oldest and largest communication agency in Bangladesh. It has won the highest number of awards as a Bangladeshi agency.
                                </p>
                            </div>
                        </div>
                        <div className="value-box">
                            <div className='col-3 value-icon'>
                                <i className="bi bi-lightbulb"></i>
                            </div>
                            <div className='value-text'>
                                <h4>CREATIVE</h4>
                                <p>
                                      We value ideas that lead to making real impact. We find the spark of creativity everywhere, applying creative thinking to all aspects of our roles, not just the creative work.
                                </p>
                            </div>
                        </div>
                        <div className="value-box">
                            <div className='col-3 value-icon'>
                                <i className="bi bi-bricks"></i>
                            </div>
                            <div className='value-text'>
                                <h4>COURAGEOUS</h4>
                                <p>
                                    We cherish innovation and adventurous execution, with a mentality of “go”. We are prepared to take a stand, challenge and strive for what is right.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row our-services">
                    <div className="section-title">
                        <h2>OUR SERVICES</h2>
                        <hr />
                    </div>
                    <ServiceSection></ServiceSection>
                </div>
            </div>
        </section>
    );
};

export default About;