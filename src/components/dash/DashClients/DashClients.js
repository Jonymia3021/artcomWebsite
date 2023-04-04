import React, { useState } from 'react';
import dashClients from './dashClients.css';
import img from '../../../Images/Our Clients_Page/ACI.png';
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
            <h4>Are you sure you want to delete ACI Bangladesh?</h4>
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

const DashClients = () => {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className='dash-team'>
            <div className="dash-btn-group">
                <Link className='disable' to='/admin/clients'>see all Clients</Link>
                <Link to='/admin/clients/add'>add new Clients</Link>
            </div>
                <div className='dash-team-list'>
                    <div class="card">
                        <img className='img-thumbnail' src={img} alt="" />
                        <div class="card-body">
                            <h5 class="card-title">ACI Bangladesh</h5>
                            <div>
                                <Link to='/admin/clients/edit' className='btn btn-outline-secondary'>Edit</Link>
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
                            <h5 class="card-title">ACI Bangladesh</h5>
                            <div>
                                <Link to='/admin/clients/edit' className='btn btn-outline-secondary'>Edit</Link>
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
                            <h5 class="card-title">ACI Bangladesh</h5>
                            <div>
                                <Link to='/admin/clients/edit' className='btn btn-outline-secondary'>Edit</Link>
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
                            <h5 class="card-title">ACI Bangladesh</h5>
                            <div>
                                <Link to='/admin/clients/edit' className='btn btn-outline-secondary'>Edit</Link>
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
                            <h5 class="card-title">ACI Bangladesh</h5>
                            <div>
                                <Link to='/admin/clients/edit' className='btn btn-outline-secondary'>Edit</Link>
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
                            <h5 class="card-title">ACI Bangladesh</h5>
                            <div>
                                <Link to='/admin/clients/edit' className='btn btn-outline-secondary'>Edit</Link>
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
                            <h5 class="card-title">ACI Bangladesh</h5>
                            <div>
                                <Link to='/admin/clients/edit' className='btn btn-outline-secondary'>Edit</Link>
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
                            <h5 class="card-title">ACI Bangladesh</h5>
                            <div>
                                <Link to='/admin/clients/edit' className='btn btn-outline-secondary'>Edit</Link>
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
                            <h5 class="card-title">ACI Bangladesh</h5>
                            <div>
                                <Link to='/admin/clients/edit' className='btn btn-outline-secondary'>Edit</Link>
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

export default DashClients;