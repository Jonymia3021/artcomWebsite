import React, { useState } from 'react';
import img from '../../../Images/Our Clients_Page/ACI.png';
import { Link } from 'react-router-dom';

const DashClientsEdit = () => {

    const [barndInfo, setBrandInfo] = useState({
        brand: 'ACI Bangladesh',
        credential: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'example.com'
    });

    return (
        <div className='team-edit'>
            <div className="dash-btn-group">
                <Link to='/admin/clients'>see all Clients</Link>
                <Link to='/admin/clients/add'>add new Clients</Link>
            </div>
                        <form>
                            <label className='form-label'>Brand Name</label><br />
                            <input type="text" 
                            className='form-control'
                            defaultValue={barndInfo.brand} />
                            <br />
                            <label className='form-label'>Credential</label><br />
                            <textarea style={{height:'200px'}} 
                            type="text" 
                            className='form-control'
                            defaultValue={barndInfo.credential} ></textarea>
                            <br />
                            <div className='team-edit-img'>
                                <img className='img-thumbnail' src={img} alt="" />
                            </div>
                            <br />
                            <div class="input-group mb-3">
                                <label class="input-group-text" for="inputGroupFile01">Upload Image</label>
                                <input type="file" class="form-control" id="inputGroupFile01" />
                            </div>
                            
                            <input className='btn btn-secondary' type="submit" value="Update" />
                        </form>
                        </div>
    );
};

export default DashClientsEdit;