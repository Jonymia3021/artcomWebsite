import React, { useState } from 'react';
import img from '../../../Images/Team/3. Ouishi Prodhan_Communications Head.jpg';
import { Link } from 'react-router-dom';

const DashTeamEdit = () => {

    const [teamInfo, setTeamInfo] = useState({
        name: 'Oishi Prodhan',
        designation: 'Communications Head',
        img: 'example.com'
    });

    return (
        <div className='team-edit'>
            <div className="dash-btn-group">
                <Link to='/admin/team'>see all team members</Link>
                <Link to='/admin/team/new'>add new team members</Link>
            </div>
                        <form>
                            <label className='form-label'>Name</label><br />
                            <input type="text" 
                            className='form-control'
                            defaultValue={teamInfo.name} />
                            <br />
                            <label className='form-label'>Designation</label><br />
                            <input type="text" 
                            className='form-control'
                            defaultValue={teamInfo.designation} />
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

export default DashTeamEdit;