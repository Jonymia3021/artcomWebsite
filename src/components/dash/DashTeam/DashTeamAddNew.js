import React from 'react';
import { Link } from 'react-router-dom';

const DashTeamAddNew = () => {
    return (
        <div className='dash-team-addNew'>
            <div className="dash-btn-group">
                <Link to='/admin/team'>see all team members</Link>
                <Link className='disable' to='/admin/team/new'>add new team members</Link>
            </div>
            <h2 style={{textAlign:'center'}}>Add New Team Member</h2>
            <form>
                <label className='form-label'>Name</label><br />
                <input type="text" className='form-control' />
                <br />
                <label className='form-label'>Designation</label><br />
                <input type="text" className='form-control' />
                <br />
                <div class="input-group mb-3">
                    <label class="input-group-text" for="inputGroupFile01">Upload Image</label>
                    <input type="file" class="form-control" id="inputGroupFile01" />
                </div>
                <br />
                <input className='btn btn-secondary' type="submit" value="Add Member" />
            </form>
        </div>
    );
};

export default DashTeamAddNew;