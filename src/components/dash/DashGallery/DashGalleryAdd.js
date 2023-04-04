import React from 'react';
import { Link } from 'react-router-dom';

const DashGalleryAdd = () => {
    return (
            <div className='dash-gallery-addNew'>
                <div className="dash-btn-group">
                    <Link to='/admin/gallery'>see all Images</Link>
                    <Link className='disable' to='/admin/gallery/add'>add new Images</Link>
                </div>
                <h2 style={{textAlign:'center'}}>Add New Image to The Gallery</h2>
                <form>
                    <div class="input-group mb-3">
                        <label class="input-group-text" for="inputGroupFile01">Upload</label>
                        <input type="file" class="form-control" id="inputGroupFile01" />
                    </div>
                    <input className='btn btn-outline-primary' type="submit" value="Add" />
                </form>
            </div>
    );
};

export default DashGalleryAdd;