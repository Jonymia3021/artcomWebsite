import React, { useState } from 'react';
import dashGallery from './dashGallery.css';
import img from '../../../Images/hero-img.png';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body">
              <h4>Are you sure you want to delete?</h4>
              <div>
                  <button className='btn btn-danger' style={{marginRight:'20px'}}>Yes</button>
                  <button className='btn btn-primary' onClick={props.onHide}>No</button>
              </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    );
  }

const DashGallery = () => {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className='dash-gallery'>
            <div className="dash-btn-group">
                <Link className='disable' to='/admin/gallery'>see all Images</Link>
                <Link to='/admin/gallery/add'>add new Images</Link>
            </div>
            <div className="dash-img-container">
                <div className="dash-img-box">
                    <img src={img} alt="" />
                    <div className='dash-img-box-button'>
                        <button onClick={() => setModalShow(true)} className='btn btn-outline-danger'>Delete</button>
                    </div>
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
                <div className="dash-img-box">
                    <img src={img} alt="" />
                    <div className='dash-img-box-button'>
                        <button onClick={() => setModalShow(true)} className='btn btn-outline-danger'>Delete</button>
                    </div>
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
                <div className="dash-img-box">
                    <img src={img} alt="" />
                    <div className='dash-img-box-button'>
                        <button onClick={() => setModalShow(true)} className='btn btn-outline-danger'>Delete</button>
                    </div>
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
                <div className="dash-img-box">
                    <img src={img} alt="" />
                    <div className='dash-img-box-button'>
                        <button onClick={() => setModalShow(true)} className='btn btn-outline-danger'>Delete</button>
                    </div>
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
                <div className="dash-img-box">
                    <img src={img} alt="" />
                    <div className='dash-img-box-button'>
                        <button onClick={() => setModalShow(true)} className='btn btn-outline-danger'>Delete</button>
                    </div>
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
                <div className="dash-img-box">
                    <img src={img} alt="" />
                    <div className='dash-img-box-button'>
                        <button onClick={() => setModalShow(true)} className='btn btn-outline-danger'>Delete</button>
                    </div>
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
                <div className="dash-img-box">
                    <img src={img} alt="" />
                    <div className='dash-img-box-button'>
                        <button onClick={() => setModalShow(true)} className='btn btn-outline-danger'>Delete</button>
                    </div>
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
                <div className="dash-img-box">
                    <img src={img} alt="" />
                    <div className='dash-img-box-button'>
                        <button onClick={() => setModalShow(true)} className='btn btn-outline-danger'>Delete</button>
                    </div>
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
            </div>
        </div>
    );
};

export default DashGallery;