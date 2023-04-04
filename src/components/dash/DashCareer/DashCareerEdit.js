import React, { useState } from 'react';
import img from '../../../Images/Slider Images/img 3.png';
import { Link } from 'react-router-dom';

const DashCareerEdit = () => {

    const [jobInfo, setJobInfo] = useState({
        title: 'International Rice Research Institute (IRRI)',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde esse quas voluptate pariatur voluptates libero doloribus sint, quibusdam, velit fugiat, facere mollitia eos distinctio culpa? Animi, consectetur, officia quod vel aperiam reiciendis facere odio quisquam impedit consequuntur ipsum minus adipisci, sed ad corrupti aut recusandae hic. Molestias veritatis, aut, unde explicabo ullam vero iure, incidunt vel facilis provident non ipsa perferendis? Aperiam unde perferendis vero autem in voluptatem dolorum consectetur reiciendis deleniti atque, sed architecto eligendi, esse accusantium blanditiis dolores rem sunt quis expedita, tempore aliquid velit. Quibusdam earum, ratione aspernatur laboriosam nesciunt dolorem ullam debitis natus modi unde itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dicta possimus voluptatibus optio cum pariatur iusto vitae sit? Eum similique nulla autem rem reiciendis distinctio vitae, voluptatem velit impedit hic tempora voluptate? Quis quod praesentium quos veniam, nihil labore beatae. Vel, nemo eligendi perspiciatis eum magni dolorem quae, et dolorum consequuntur harum minus repellendus. Quibusdam assumenda officiis mollitia cumque, maxime non dolorum libero. Earum soluta cupiditate consectetur enim? Illum ipsum cum consequuntur dolor quasi aperiam, non sint nihil dolores, iusto dicta amet quae voluptatem similique vel? Veniam vitae at ut deserunt cumque, unde hic. Fugit perferendis est eum excepturi corporis totam hic rem modi ab, unde vitae voluptate? Fugit quos facilis nesciunt repudiandae odit repellat saepe ex, veritatis illum nulla quae temporibus unde possimus iste veniam quis expedita nisi assumenda est iusto quidem neque minima quo! Omnis repellat autem voluptas exercitationem nostrum impedit corporis illo sint ex soluta! Perspiciatis placeat error sunt at nesciunt voluptatem maxime doloribus dolores maiores optio. Voluptas accusantium asperiores dicta libero magni, repudiandae sapiente soluta cum optio expedita natus. Dolorum aspernatur, excepturi molestias tempore perferendis consectetur adipisci voluptatum modi facere enim atque quaerat eveniet, laudantium qui nostrum exercitationem vero, et necessitatibus. Eum beatae aut impedit fugit!',
    });

    return (
        <div className='team-edit'>
            <div className="dash-btn-group">
                <Link to='/admin/career'>see all Jobs</Link>
                <Link to='/admin/career/add'>add new Jobs</Link>
            </div>
            <h2>Review your Job Post</h2>
            <form>
                <label className='form-label'>Job Title</label><br />
                <input type="text" 
                className='form-control'
                defaultValue={jobInfo.title} />
                <br />
                <label className='form-label'>Body</label><br />
                <textarea style={{height:'200px'}} 
                type="text" 
                className='form-control'
                defaultValue={jobInfo.description} ></textarea>
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

export default DashCareerEdit;