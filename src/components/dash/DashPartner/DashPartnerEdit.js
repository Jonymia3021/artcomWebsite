import React, { useState } from 'react';
import img from '../../../Images/Our Clients_Page/ADD-Internation.png';
import { Link } from 'react-router-dom';

const DashPartnerEdit = () => {

    const [partnerInfo, setPartnerInfo] = useState({
        brand: 'ADD International',
        description: 'An Agile research Platform offering insights in real-time. It uncovers personalized & intelligent insights for marketing from data to realize smarter decision-making, smarter marketing, and higher ROI.',
        img: 'example.com'
    });

    return (
        <div className='team-edit'>
            <div className="dash-btn-group">
                <Link to='/admin/partner'>see all Partner</Link>
                <Link to='/admin/partner/add'>add new Partner</Link>
            </div>
            <h2>Edit Partner Info</h2>
            <form>
                <label className='form-label'>Partner Title</label><br />
                <input type="text" 
                className='form-control'
                defaultValue={partnerInfo.brand} />
                <br />
                <label className='form-label'>Description</label><br />
                <textarea style={{height:'200px'}} 
                type="text" 
                className='form-control'
                defaultValue={partnerInfo.description} ></textarea>
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

export default DashPartnerEdit;