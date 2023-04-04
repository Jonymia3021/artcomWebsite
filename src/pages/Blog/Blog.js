import React from 'react';
import blog from './blog.css';
import BlogSection from '../../components/BlogSection/BlogSection';

const Blog = () => {
    return (
        <section id="blog-page">
            <div className="section-img-box"></div>
            <div className="container">
                <div className="row">
                    <div className="section-title">
                        <h2>DIARY OF A MADMAN</h2>
                        <hr />
                        <p>TAKE A LOOK AT WHAT GOES THROUGH THE MINDS OF OUR <br /> MADMEN WHEN THEY ARE NOT WORKING ON CONTENT</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div style={{margin:'20px 0'}}><BlogSection></BlogSection></div>
                    <div style={{margin:'20px 0'}}><BlogSection></BlogSection></div>
                </div>
            </div>
        </section>
    );
};

export default Blog;