import React from 'react';
import mainDash from './mainDash.css';
import { Outlet, NavLink } from 'react-router-dom';

const MainDash = () => {

    

    return (
        <section id='dashboard'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <div className="dash-header">
                            <div className="dash-logo">
                                <h2>Artistic Communication</h2>
                                <hr className="border opacity-100" />
                            </div>
                            <div className="dash-sidebar">
                                <ul className="list-group">
                                    <NavLink className='list-group-item list-group-item-action' to='contact'><i className="bi bi-envelope"></i>  <span>Contact</span></NavLink>
                                    <NavLink className='list-group-item list-group-item-action' to='team'><i className="bi bi-people-fill"></i>  <span>Team</span></NavLink>
                                    <NavLink className='list-group-item list-group-item-action' to='clients'><i className="bi bi-person-workspace"></i>  <span>Clients</span></NavLink>
                                    <NavLink className='list-group-item list-group-item-action' to='gallery'><i className="bi bi-images"></i>  <span>Gallery</span></NavLink>
                                    <NavLink className='list-group-item list-group-item-action' to='partner'><i className="bi bi-person-video"></i>  <span>Partner</span></NavLink>
                                    <NavLink className='list-group-item list-group-item-action' to='work'><i className="bi bi-cpu"></i>  <span>Work</span></NavLink>
                                    <NavLink className='list-group-item list-group-item-action' to='career'><i className="bi bi-bar-chart-steps"></i>  <span>Career</span></NavLink>
                                    <NavLink className='list-group-item list-group-item-action' to='blog'><i className="bi bi-file-text"></i>  <span>Blog</span></NavLink>
                                    <NavLink className='list-group-item list-group-item-action' to='settings'><i className="bi bi-gear"></i>  <span>Settings</span></NavLink>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div data-bs-spy="scroll" className="col-md-9">
                        <Outlet />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainDash;