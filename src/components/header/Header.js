import React, { useState, useEffect } from 'react';
import header from './header.css';
import logo from '../../Images/Company-Logo_Top.png';
import { Link, NavLink } from 'react-router-dom';
import Collapse from 'react-bootstrap/Collapse';

const Header = () => {

    const [isSticky, setIsSticky] = useState(false);
    const [open, setOpen] = useState(false);
    const [activeNav, setActiveNav] = useState('Home');

    useEffect(() => {
        function handleScroll() {
          if (window.pageYOffset > 0) {
            setIsSticky(true);
          } else {
            setIsSticky(false);
          }
        }
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    const handleActiveNav = (e) => {
        setActiveNav(e.target.innerText);
    }

    const handleLogoClick = () => {
        setActiveNav('home')
    }

    return (
        <header className={isSticky ? 'sticky' : ''}>
            <div className="container">
                <div className="logo">
                    <Link to='/'><img onClick={handleLogoClick} src={logo} alt="Artistic Communication" /></Link>
                </div>
                <div className="main-nav">
                    <div className="nav-logo">
                        <h5>{activeNav}</h5>
                    </div>
                    <div className="nav">
                        <button
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                            className='btn btn-light'>{open === true ? <i className="bi bi-x"></i> : <i className="bi bi-list"></i>}</button>
                        <Collapse in={open}>
                            <ul id="example-collapse-text" className="floating-nav">
                                <li><NavLink onClick={handleActiveNav} to='/about'>about us</NavLink></li>
                                <li><NavLink onClick={handleActiveNav} to='/blog'>our blogs</NavLink></li>
                                <li><NavLink onClick={handleActiveNav} to='/services'>services</NavLink></li>
                                <li><NavLink onClick={handleActiveNav} to='/innovation'>innovation & tech</NavLink></li>
                                <li><NavLink onClick={handleActiveNav} to='/team'>team</NavLink></li>
                                <li><NavLink onClick={handleActiveNav} to='/work'>interesting works</NavLink></li>
                                <li><NavLink onClick={handleActiveNav} to='/career'>Career</NavLink></li>
                                <li><NavLink onClick={handleActiveNav} to='/clients'>clients</NavLink></li>
                                <li><NavLink onClick={handleActiveNav} to='/contact'>Contact Us</NavLink></li>
                            </ul>
                        </Collapse>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;