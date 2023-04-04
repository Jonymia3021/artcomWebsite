import React from 'react';
import { Link } from 'react-router-dom';
import header from './footer.css';

const Footer = () => {
    return (
        <section id='footer'>
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6">
                        <p><strong><i className="bi bi-c-circle"></i> 2023 All rights Reserved by Artistic Communication.</strong></p>
                    </div>
                    <div className="col-md-6 social-icons">
                        <Link to='https://facebook.com/artcombdl/'><i className="bi bi-facebook"></i></Link>
                        <Link to='https://www.linkedin.com/in/artistic-communication-8b65aa107?trk=public_profile_browsemap&originalSubdomain=bd'><i className="bi bi-linkedin"></i></Link>
                        <Link to='https://youtube.com/c/artcombd'><i className="bi bi-youtube"></i></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;