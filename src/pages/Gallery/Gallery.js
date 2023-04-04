import React from 'react';
import gallery from './gallery.css';
import GallerySection from '../../components/GallerySection/GallerySection';

const Gallery = () => {
    return (
        <section id='gallery-page'>
            <div className="section-img-box"></div>
            <div className="container">
            <div className="row">
                    <div className="section-title">
                        <h2>Gallery</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <GallerySection></GallerySection>
                    <GallerySection></GallerySection>
                    <GallerySection></GallerySection>
                </div>
            </div>
        </section>
    );
};

export default Gallery;