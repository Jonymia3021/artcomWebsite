import React from 'react';
import { Link } from 'react-router-dom';
import blogSection from './blogSection.css';
import img from '../../Images/Slider Images/img 1.png';

const BlogSection = () => {
    return (
        <div className='blog-container'>
            <div className="blog-box">
                <img src={img} alt="" />
                <div className="blog-text-box">
                    <h4>OUR LEGACY OF BALANCE</h4>
                    <p>
                        I was asked to write a blog on how Artistic has managed to be one of the most gender-neutral agency in this male-dominated industry in Bangladesh.
                    </p>
                    <Link to={'/blog/' + 'OUR-LEGACY'}>READ MORE <i className="bi bi-arrow-right"></i></Link>
                    <div className="blog-author border-top">
                        <p>ALY ZAKER</p>
                        <p className='blog-author-date border-start'>MARCH 07, 2023</p>
                    </div>
                </div>
            </div>
            <div className="blog-box">
                <img src={img} alt="" />
                <div className="blog-text-box">
                    <h4>OUR LEGACY OF BALANCE</h4>
                    <p>
                        I was asked to write a blog on how Artistic has managed to be one of the most gender-neutral agency in this male-dominated industry in Bangladesh.
                    </p>
                    <Link to={'/blog/' + 'OUR-LEGACY'}>READ MORE <i className="bi bi-arrow-right"></i></Link>
                    <div className="blog-author border-top">
                        <p>ALY ZAKER</p>
                        <p className='blog-author-date border-start'>MARCH 07, 2023</p>
                    </div>
                </div>
            </div>
            <div className="blog-box">
                <img src={img} alt="" />
                <div className="blog-text-box">
                    <h4>OUR LEGACY OF BALANCE</h4>
                    <p>
                        I was asked to write a blog on how Artistic has managed to be one of the most gender-neutral agency in this male-dominated industry in Bangladesh.
                    </p>
                    <Link to={'/blog/' + 'OUR-LEGACY'}>READ MORE <i className="bi bi-arrow-right"></i></Link>
                    <div className="blog-author border-top">
                        <p>ALY ZAKER</p>
                        <p className='blog-author-date border-start'>MARCH 07, 2023</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogSection;