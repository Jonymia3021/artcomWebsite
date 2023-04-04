import React, { useState } from 'react';
import img from '../../../Images/Our Clients_Page/ADD-Internation.png';
import { Link } from 'react-router-dom';

const DashWorkEdit = () => {

    const [workInfo, setWorkInfo] = useState({
        brand: 'ADD-International',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita aspernatur nesciunt sunt! Quaerat fugiat iste, eveniet suscipit unde quos non esse dicta! Ipsum quis repellendus quos aut repudiandae ab quasi ea porro quia excepturi doloremque dignissimos aliquid voluptate placeat ut optio, nobis maxime non. Aspernatur impedit deserunt minus minima nobis!',
        img: 'example.com'
    });

    return (
            <div className='team-edit'>
                <div className="dash-btn-group">
                    <Link to='/admin/work'>see all Work</Link>
                    <Link to='/admin/work/add'>add new Work</Link>
                </div>
                <h2>Edit Work Details</h2>
                <form>
                    <label className='form-label'>Work Title</label><br />
                    <input type="text" 
                    className='form-control'
                    defaultValue={workInfo.brand} />
                    <br />
                    <label className='form-label'>Body</label><br />
                    <textarea style={{height:'200px'}} 
                    type="text" 
                    className='form-control'
                    defaultValue={workInfo.description} ></textarea>
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

export default DashWorkEdit;