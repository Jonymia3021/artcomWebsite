import React from 'react';
import sideIcons from './sideIcons.css';
import { Link } from 'react-router-dom';

const SideIcons = () => {
    return (
        <div id='sideIcons'>
            <Link to='https://facebook.com/artcombdl/'><i className="bi bi-facebook"></i></Link>
            <Link to='https://www.linkedin.com/in/artistic-communication-8b65aa107?trk=public_profile_browsemap&originalSubdomain=bd'><i className="bi bi-linkedin"></i></Link>
            <Link to='https://youtube.com/c/artcombd'><i className="bi bi-youtube"></i></Link>
        </div>
    );
};

export default SideIcons;