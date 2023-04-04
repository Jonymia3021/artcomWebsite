import React, { useState } from 'react';
import img from '../../../Images/Slider Images/img 3.png';
import { Link } from 'react-router-dom';

const DashBlogEdit = () => {

    const [barndInfo, setBrandInfo] = useState({
        brand: 'OUR LEGACY OF BALANCE',
        credential: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores et facere excepturi perferendis culpa, vitae modi quis harum quos quae.',
        img: 'example.com'
    });

    return (
        <div className='team-edit'>
            <div className="dash-btn-group">
                <Link to='/admin/blog'>see all Blogs</Link>
                <Link to='/admin/blog/add'>add new Blog</Link>
            </div>
            <h2>Edit Blog</h2>
            <form>
                <label className='form-label'>Blog Title</label><br />
                <input type="text" 
                className='form-control'
                defaultValue={barndInfo.brand} />
                <br />
                <label className='form-label'>Body</label><br />
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

export default DashBlogEdit;