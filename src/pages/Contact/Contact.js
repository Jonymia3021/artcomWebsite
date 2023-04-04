import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import contact from './contact.css';

const Contact = () => {
    return (
        <section id="contact-page">
            <div className="section-img-box"></div>
            <div className="container">
                <div className="row">
                    <div className="section-title">
                        <h2>REACH OUT</h2>
                        <hr />
                        <p>
                            LOOKING FOR NEW BUSINESS, OR JUST TO KNOW MORE <br />
                             contact US?<br />
                             GET IN TOUCH THROUGH THE INFORMATION PROVIDED <br />
                             BELOW!
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 contact-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.1100665890795!2d90.4100025149819!3d23.779094584575187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79df551be37%3A0x30ca6fb56f41fdd4!2sHouse%2016%2C%20Suite%20E%2C%202%20Rd%2013%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1679413631583!5m2!1sen!2sbd" style={{border:'0'}} allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="col-md-4 contact-address">
                        <h2>Address</h2>
                        <p>House 16, Suite E-2, Road 13, Block G, Niketan, <br />Gulshan 1, Dhaka, Bangladesh</p>
                        <div>
                            <p>
                                <i className="bi bi-envelope"></i>
                                <strong>artcombd@gmail.com</strong>
                            </p>
                        </div>
                        <div>
                            <p>
                                <i className="bi bi-telephone"></i>
                                <strong>+880 2 4881 2846</strong>
                            </p>
                            <p>
                                <i className="bi bi-telephone"></i>
                                <strong>+880 1717 720 024</strong>
                            </p>
                            <p>
                                <i className="bi bi-telephone"></i>
                                <strong>+880 1712 750 382</strong>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <ContactForm></ContactForm>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </section>
    );
};

export default Contact;