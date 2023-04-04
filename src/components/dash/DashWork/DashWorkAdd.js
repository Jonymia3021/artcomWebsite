import React from 'react';
import { Link } from 'react-router-dom';

const DashWorkAdd = () => {
    return (
        <div className='dash-team-addNew'>
            <div className="dash-btn-group">
                <Link to='/admin/work'>see all Work</Link>
                <Link className='disable' to='/admin/work/add'>add new Work</Link>
            </div>
            <h2 style={{textAlign:'center'}}>Add New Portfolio</h2>
            <form>
                <label className='form-label'>Work Title</label><br />
                <input type="text" className='form-control' />
                <br />
                <label className='form-label'>Body</label><br />
                <textarea style={{height:'200px'}} type="text" className='form-control' ></textarea>
                <br />
                <div class="input-group mb-3">
                    <label class="input-group-text" for="inputGroupFile01">Upload Image</label>
                    <input type="file" class="form-control" id="inputGroupFile01" />
                </div>
                <br />
                <input className='btn btn-secondary' type="submit" value="Add " />
            </form>
        </div>
    );
};

export default DashWorkAdd;