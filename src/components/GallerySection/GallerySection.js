import React, { useState } from 'react';
import gallerySection from './gallerySection.css';
import Modal from 'react-modal';

// Modal.setAppElement('#root');

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#f0f8ff00',
    },
  };

const GallerySection = () => {

    const img1 = 'https://images.unsplash.com/photo-1612178010892-205e565c4c5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3dpemVybGFuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60';
    const img2 = 'https://images.unsplash.com/photo-1559554498-13ec30537909?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3dpemVybGFuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60';
    const img3 = 'https://images.unsplash.com/photo-1570877236371-1e594404a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3dpemVybGFuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60';
    const img4 = 'https://images.unsplash.com/photo-1559554498-045a606986f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHN3aXplcmxhbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60';
    const img5 = 'https://images.unsplash.com/photo-1576773347858-bd0600044863?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHN3aXplcmxhbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60';

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [imgSrc, setImgSrc] = useState('');

    const handleImageClick = (e) => {
        setImgSrc(e.target.src)
        setModalIsOpen(true);
      };
    
      const handleCloseModal = () => {
        setModalIsOpen(false);
      };

    return (
        <div>
            <div className="gallery-container">
                <img onClick={handleImageClick} className='img-fluid img-thumbnail' src={img1} alt="" />
                <img onClick={handleImageClick} className='img-fluid img-thumbnail' src={img2} alt="" />
                <img onClick={handleImageClick} className='img-fluid img-thumbnail' src={img3} alt="" />
                <img onClick={handleImageClick} className='img-fluid img-thumbnail' src={img4} alt="" />
                <img onClick={handleImageClick} className='img-fluid img-thumbnail' src={img5} alt="" />
                <img onClick={handleImageClick} className='img-fluid img-thumbnail' src={img1} alt="" />
                <img onClick={handleImageClick} className='img-fluid img-thumbnail' src={img2} alt="" />
                <img onClick={handleImageClick} className='img-fluid img-thumbnail' src={img3} alt="" />
                <img onClick={handleImageClick} className='img-fluid img-thumbnail' src={img4} alt="" />
                <img onClick={handleImageClick} className='img-fluid img-thumbnail' src={img5} alt="" />
                <video src=""></video>
            </div>

            <Modal style={customStyles} isOpen={modalIsOpen} onRequestClose={handleCloseModal}>
                <div className='modal-container'>
                    <img src={imgSrc} alt="" />
                    <button className='btn btn-outline-dark' onClick={handleCloseModal}><i className="bi bi-x-lg"></i></button>
                </div>
            </Modal>
        </div>
    );
};

export default GallerySection;