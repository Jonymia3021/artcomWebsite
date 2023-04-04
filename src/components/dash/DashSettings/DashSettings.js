import React, { useState } from 'react';
import dashSettings from './dashSettings.css';
import logo from '../../../Images/Company-Logo_Top.png';

const DashSettings = () => {

    const [showSettingsSection, setShowSettingsSection] = useState('');

    const [dummyPhone, setDummyPhone] = useState({
        phone: '+880248812846'
    });
    const [dummySocialLinks, setDummySocialLinks] = useState({
        name: 'Facebook',
        link: 'https://facebook.com/artcombdl/'
    });

    return (
        <div className="dash-settings-container">

            {/* site logo  */}

            <div className="settings-card">
                <div className="card-info">
                    <div className='card-info-1'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='card-info-2'>
                        <p><strong>Site Logo</strong></p>
                    </div>
                    <div className='card-info-3'>
                        {showSettingsSection === 'siteLogoForm' ? <button onClick={()=> setShowSettingsSection('')} className='btn btn-outline-secondary'>Undo</button> : <button onClick={()=> setShowSettingsSection('siteLogoForm')} className='btn btn-secondary'>Change</button>}
                    </div>
                </div>
                {showSettingsSection === 'siteLogoForm' && <div className="card-form">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Upload</span>
                        </div>
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="inputGroupFile01" />
                            <label className="custom-file-label" for="inputGroupFile01">Choose file</label>
                        </div>
                    </div>
                    <button className='btn btn-outline-primary'>Update</button>
                </div>}
            </div>

            {/* Office address  */}

            <div className="settings-card">
                <div className="card-info">
                    <div className='card-info-1'>
                        <p>House 16, Suite E-2, Road 13, Block G,<br /> Niketan,Gulshan 1, Dhaka, Bangladesh</p>
                    </div>
                    <div>
                        <p><strong>Office Address</strong></p>
                    </div>
                    <div>
                        {showSettingsSection === 'addressForm' ? <button onClick={()=> setShowSettingsSection('')} className='btn btn-outline-secondary'>Undo</button> : <button onClick={()=> setShowSettingsSection('addressForm')} className='btn btn-secondary'>Edit</button>}
                    </div>
                </div>
                {showSettingsSection === 'addressForm' && <div className="card-form">
                    <input className='form-control' type="text" placeholder='New Address' /><br />
                    <button className='btn btn-outline-primary'>Update</button>
                </div>}
            </div>

            {/* Phone number  */}

            <div className="settings-card">
                <div className="card-info">
                    <div className='card-info-1'>
                        <div className="Dash-settings-phone-number">
                            <p>+880248812846</p>
                            <div className='Dash-settings-phone-number-btn'>
                                <button onClick={()=> setShowSettingsSection('phoneEdit')} className='btn btn-outline-secondary'>Edit</button>
                                <button className='btn btn-outline-danger'>Delete</button>
                            </div>
                        </div>
                        <div className="Dash-settings-phone-number">
                            <p>+8801717720024</p>
                            <div className='Dash-settings-phone-number-btn'>
                                <button onClick={()=> setShowSettingsSection('phoneEdit')} className='btn btn-outline-secondary'>Edit</button>
                                <button className='btn btn-outline-danger'>Delete</button>
                            </div>
                        </div>
                        <div className="Dash-settings-phone-number">
                            <p>+8801712750382</p>
                            <div className='Dash-settings-phone-number-btn'>
                                <button onClick={()=> setShowSettingsSection('phoneEdit')} className='btn btn-outline-secondary'>Edit</button>
                                <button className='btn btn-outline-danger'>Delete</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p><strong>Phone Numbers</strong></p>
                    </div>
                    <div>
                        {showSettingsSection === '' ? <button onClick={()=> setShowSettingsSection('phoneNew')} className='btn btn-secondary'>Add New</button> : <button onClick={()=> setShowSettingsSection('')} className='btn btn-outline-secondary'>Undo</button>}
                    </div>
                </div>
                {showSettingsSection === 'phoneNew' && <div className="card-form">
                    <input className='form-control' type="text" placeholder='New Phone Number' /><br />
                    <button className='btn btn-outline-primary'>Add</button>
                </div>}
                {showSettingsSection === 'phoneEdit' && <div className="card-form">
                    <input defaultValue={dummyPhone.phone} className='form-control' type="text" /><br />
                    <button className='btn btn-outline-primary'>Update</button>
                </div>}
            </div>

                {/* google map  */}

            <div className="settings-card">
                <div className="card-info">
                    <div className='card-info-1'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.109928754431!2d90.4100025142975!3d23.779099493597858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79df551be37%3A0x30ca6fb56f41fdd4!2sHouse%2016%2C%20Suite%20E%2C%202%20Rd%2013%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1679342550926!5m2!1sen!2sbd" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div>
                        <p><strong>Google Map</strong></p>
                    </div>
                    <div>
                        {showSettingsSection === 'mapEdit' ? <button onClick={()=> setShowSettingsSection('')} className='btn btn-outline-secondary'>Undo</button> : <button onClick={()=> setShowSettingsSection('mapEdit')} className='btn btn-secondary'>Edit</button>}
                    </div>
                </div>
                {showSettingsSection === 'mapEdit' && <div className="card-form">
                    <input className='form-control' type="text" placeholder='New Map Address' /><br />
                    <button className='btn btn-outline-primary'>Update</button>
                </div>}
            </div>

            {/* social media links  */}

            <div className="settings-card">
                <div className="card-info">
                    <div className='dash-social-media'>
                        <h4>All Social Media</h4>
                        <div>
                            <p>Facebook</p>
                            <button onClick={()=> setShowSettingsSection('mediaEdit')} className='btn btn-outline-primary'>Edit</button>
                        </div>
                    </div>
                    <div>
                        <p><strong>Social Media Links</strong></p>
                    </div>
                    <div>
                    </div>
                </div>
                {showSettingsSection === 'mediaEdit' && <div className="card-form">
                    <p>Paste here new {dummySocialLinks.name} Link</p>
                    <input defaultValue={dummySocialLinks.link} className='form-control' type="text" placeholder='New Links' /><br />
                    <button className='btn btn-outline-primary'>Update</button>
                </div>}
            </div>
        </div>
    );
};

export default DashSettings;