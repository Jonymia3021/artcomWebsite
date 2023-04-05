import React from 'react';
import home from './home.css';
import { Link, NavLink } from 'react-router-dom';
import TeamSection from '../../components/TeamSection/TeamSection';
import ClientsSection from '../../components/Clients/ClientsSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import CredentialSection from '../../components/CredentialSection/CredentialSection';
import GallerySection from '../../components/GallerySection/GallerySection';
import HeroSlider from '../../components/HeroSlider/HeroSlider';

const Home = () => {
    return (
        <section id='home'>

            {/* hero section  */}

            <div id="hero-img">
                <HeroSlider></HeroSlider>
            </div>

            {/* hero nav  */}

            <div className="container-fluid hero-nav">
                <div className="row">
                    <div className="col-md-4 about-nav">
                        <div className="section-img-box">
                            <Link to='/about'>
                                <p>
                                    <i className="bi bi-arrow-right-circle"></i>
                                    about
                                </p>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-4 service-nav">
                        <div className="section-img-box">
                            <Link to='/services'>
                                <p>
                                    <i className="bi bi-arrow-right-circle"></i>
                                    Our Services
                                </p>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-4 work-nav">
                        <div className="section-img-box">
                            <Link to='/work'>
                                <p>
                                    <i className="bi bi-arrow-right-circle"></i>
                                    Our work
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* hero text  */}

            <div className="container-fluid hero-text">
                <div className="row">
                    <h2>
                        EVER HEARD A STORY THAT CHANGED YOUR LIFE? WE BELIEVE STORIES <br /> HAVE THAT ABILITY. WE BELIEVE BRANDS HAVE THAT ABILITY TOO. <br /> THAT’S WHY WE’RE HERE.
                    </h2>
                    <Link to='/about'>
                        <p>
                            <i className="bi bi-arrow-right-circle"></i>
                            LEARN MORE
                        </p>
                    </Link>
                </div>
            </div>

            {/* team section  */}

            <div className="container-fluid team">
                <div className="row">
                    <TeamSection></TeamSection>
                </div>
                <Link to='/team'>
                        <p>
                            <i className="bi bi-arrow-right-circle"></i>
                            <strong>MEET OUR TEAM</strong>
                        </p>
                </Link>
            </div>

            {/* clients section  */}

            <div className="container-fluid clients">
                <div className="row">
                    <div className="section-title">
                        <h2>OUR CLIENTS</h2>
                        <hr />
                        <p>
                            The brands that share our belief in the power of stories
                        </p>
                    </div>
                </div>
                <div className="row">
                    <ClientsSection></ClientsSection>
                </div>
                <Link to='/clients'>
                        <p>
                            <i className="bi bi-arrow-right-circle"></i>
                            <strong>SEE MORE</strong>
                        </p>
                </Link>
            </div>

            {/* credential section  */}

            <div className="container credential">
                <div className="row">
                    <div className="section-title">
                        <h2>Credential</h2>
                        <hr />
                        <p>
                            What clients say about us.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <CredentialSection></CredentialSection>
                </div>
            </div>

            {/* credential section  */}

            <div className="container gallery">
                <div className="row">
                    <div className="section-title">
                        <h2>Gallery</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <GallerySection></GallerySection>
                    <Link to='/gallery'>
                        <p>
                            <i className="bi bi-arrow-right-circle"></i>
                            See More
                        </p>
                    </Link>
                </div>
            </div>

            {/* blog section  */}

            <div className="container-fluid blog">
                <div className="row">
                    <div className="section-title">
                        <h2>DIARY OF A MADMAN</h2>
                        <hr />
                        <p>
                            Take a look at what goes through the minds of our madmen when they are not working on content
                        </p>
                    </div>
                </div>
                <div className="row">
                    <BlogSection></BlogSection>
                    <Link to='/blog'>
                        <p>
                            <i className="bi bi-arrow-right-circle"></i>
                            VISIT OUR BLOG
                        </p>
                    </Link>
                </div>
            </div>

            {/* address section  */}

            <div className="container-fluid contact-section">
                <div className="row">
                    <div className="col-md-3 contact-link">
                        <div>
                            <NavLink to='/about'>About Us</NavLink>
                            <NavLink to='/contact'>Contact</NavLink>
                        </div>
                        <div>
                            <NavLink to='/privacy&policy'>Privacy Policy</NavLink>
                        </div>
                    </div>
                    <div className="col-md-6 contact-address">
                        <div className='contact-address-info'>
                            <h3>Artistic Communication</h3>
                            <p>
                                House 16, Suite E-2, Road 13, Block G, Niketan,<br /> Gulshan 1, Dhaka, Bangladesh
                            </p>
                            <p>
                                Phone: <br />
                                +880 2 4881 2846<br />
                                +880 1717 720 024 <br />+880 1712 750 382
                            </p>
                            <div>
                                <Link to='https://facebook.com/artcombdl/'><i className="bi bi-facebook"></i></Link>
                                <Link to='https://www.linkedin.com/in/artistic-communication-8b65aa107?trk=public_profile_browsemap&originalSubdomain=bd'><i className="bi bi-linkedin"></i></Link>
                                <Link to='https://youtube.com/c/artcombd'><i className="bi bi-youtube"></i></Link>
                            </div>
                        </div>
                        <div className='contact-address-btn'>
                            <Link to='/contact' className='address-btn'>REACH OUT</Link>
                        </div>
                    </div>
                    <div className="col-md-3 contact-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.109928754431!2d90.4100025142975!3d23.779099493597858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79df551be37%3A0x30ca6fb56f41fdd4!2sHouse%2016%2C%20Suite%20E%2C%202%20Rd%2013%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1679342550926!5m2!1sen!2sbd" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Home;