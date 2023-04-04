import React, { useState } from 'react';
import img from '../../../Images/Slider Images/img 3.png';
import Modal from 'react-bootstrap/Modal';
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
            <h4>Are you sure you want to delete OUR LEGACY OF BALANCE?</h4>
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

const DashBlog = () => {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className='dash-team'>
            <div className="dash-btn-group">
                <Link className='disable' to='/admin/blog'>see all Blogs</Link>
                <Link to='/admin/blog/add'>add new Blog</Link>
            </div>
                <div className='dash-team-list'>
                    <div class="card">
                        <img className='img-thumbnail' src={img} alt="" />
                        <div class="card-body">
                            <h5 class="card-title">OUR LEGACY OF BALANCE</h5>
                            <p className='card-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores et facere excepturi perferendis culpa, vitae modi quis harum quos quae...</p>
                            <div>
                                <Link to='/admin/blog/edit' className='btn btn-outline-secondary'>Edit</Link>
                                <button onClick={() => setModalShow(true)} className='btn btn-outline-danger'>Delete</button>
                                <MyVerticallyCenteredModal
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                />
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <img className='img-thumbnail' src={img} alt="" />
                        <div class="card-body">
                            <h5 class="card-title">OUR LEGACY OF BALANCE</h5>
                            <p className='card-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores et facere excepturi perferendis culpa, vitae modi quis harum quos quae...</p>
                            <div>
                                <Link to='/admin/blog/edit' className='btn btn-outline-secondary'>Edit</Link>
                                <button onClick={() => setModalShow(true)} className='btn btn-outline-danger'>Delete</button>
                                <MyVerticallyCenteredModal
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                />
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <img className='img-thumbnail' src={img} alt="" />
                        <div class="card-body">
                            <h5 class="card-title">OUR LEGACY OF BALANCE</h5>
                            <p className='card-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores et facere excepturi perferendis culpa, vitae modi quis harum quos quae...</p>
                            <div>
                                <Link to='/admin/blog/edit' className='btn btn-outline-secondary'>Edit</Link>
                                <button onClick={() => setModalShow(true)} className='btn btn-outline-danger'>Delete</button>
                                <MyVerticallyCenteredModal
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                />
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <img className='img-thumbnail' src={img} alt="" />
                        <div class="card-body">
                            <h5 class="card-title">OUR LEGACY OF BALANCE</h5>
                            <p className='card-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores et facere excepturi perferendis culpa, vitae modi quis harum quos quae...</p>
                            <div>
                                <Link to='/admin/blog/edit' className='btn btn-outline-secondary'>Edit</Link>
                                <button onClick={() => setModalShow(true)} className='btn btn-outline-danger'>Delete</button>
                                <MyVerticallyCenteredModal
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                />
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <img className='img-thumbnail' src={img} alt="" />
                        <div class="card-body">
                            <h5 class="card-title">OUR LEGACY OF BALANCE</h5>
                            <p className='card-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores et facere excepturi perferendis culpa, vitae modi quis harum quos quae...</p>
                            <div>
                                <Link to='/admin/blog/edit' className='btn btn-outline-secondary'>Edit</Link>
                                <button onClick={() => setModalShow(true)} className='btn btn-outline-danger'>Delete</button>
                                <MyVerticallyCenteredModal
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                />
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <img className='img-thumbnail' src={img} alt="" />
                        <div class="card-body">
                            <h5 class="card-title">OUR LEGACY OF BALANCE</h5>
                            <p className='card-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores et facere excepturi perferendis culpa, vitae modi quis harum quos quae...</p>
                            <div>
                                <Link to='/admin/blog/edit' className='btn btn-outline-secondary'>Edit</Link>
                                <button onClick={() => setModalShow(true)} className='btn btn-outline-danger'>Delete</button>
                                <MyVerticallyCenteredModal
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                />
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <img className='img-thumbnail' src={img} alt="" />
                        <div class="card-body">
                            <h5 class="card-title">OUR LEGACY OF BALANCE</h5>
                            <p className='card-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores et facere excepturi perferendis culpa, vitae modi quis harum quos quae...</p>
                            <div>
                                <Link to='/admin/blog/edit' className='btn btn-outline-secondary'>Edit</Link>
                                <button onClick={() => setModalShow(true)} className='btn btn-outline-danger'>Delete</button>
                                <MyVerticallyCenteredModal
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                />
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <img className='img-thumbnail' src={img} alt="" />
                        <div class="card-body">
                            <h5 class="card-title">OUR LEGACY OF BALANCE</h5>
                            <p className='card-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores et facere excepturi perferendis culpa, vitae modi quis harum quos quae...</p>
                            <div>
                                <Link to='/admin/blog/edit' className='btn btn-outline-secondary'>Edit</Link>
                                <button onClick={() => setModalShow(true)} className='btn btn-outline-danger'>Delete</button>
                                <MyVerticallyCenteredModal
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                />
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <img className='img-thumbnail' src={img} alt="" />
                        <div class="card-body">
                            <h5 class="card-title">OUR LEGACY OF BALANCE</h5>
                            <p className='card-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores et facere excepturi perferendis culpa, vitae modi quis harum quos quae...</p>
                            <div>
                                <Link to='/admin/blog/edit' className='btn btn-outline-secondary'>Edit</Link>
                                <button onClick={() => setModalShow(true)} className='btn btn-outline-danger'>Delete</button>
                                <MyVerticallyCenteredModal
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default DashBlog;