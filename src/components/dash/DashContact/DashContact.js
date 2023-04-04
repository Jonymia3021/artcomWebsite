import React from 'react';
import dashContact from './dashContact.css';
import Modal from 'react-bootstrap/Modal';

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

const DashContact = () => {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className='dash-contact'>
            <div className="card">
                <div className="card-body ">
                    <div>
                        <h5 className="card-title">Name</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">example@demo.com</h6>
                        <h6 className="card-subtitle mb-2 text-body-secondary">Example Subject</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <div>
                        <button onClick={() => setModalShow(true)} className='btn btn-outline-danger'>Delete</button>
                        <MyVerticallyCenteredModal
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                />
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body ">
                    <div>
                        <h5 className="card-title">Name</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">example@demo.com</h6>
                        <h6 className="card-subtitle mb-2 text-body-secondary">Example Subject</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <div>
                        <button onClick={() => setModalShow(true)} className='btn btn-outline-danger'>Delete</button>
                        <MyVerticallyCenteredModal
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                />
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body ">
                    <div>
                        <h5 className="card-title">Name</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">example@demo.com</h6>
                        <h6 className="card-subtitle mb-2 text-body-secondary">Example Subject</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <div>
                        <button onClick={() => setModalShow(true)} className='btn btn-outline-danger'>Delete</button>
                        <MyVerticallyCenteredModal
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                />
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body ">
                    <div>
                        <h5 className="card-title">Name</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">example@demo.com</h6>
                        <h6 className="card-subtitle mb-2 text-body-secondary">Example Subject</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <div>
                        <button onClick={() => setModalShow(true)} className='btn btn-outline-danger'>Delete</button>
                        <MyVerticallyCenteredModal
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                />
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body ">
                    <div>
                        <h5 className="card-title">Name</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">example@demo.com</h6>
                        <h6 className="card-subtitle mb-2 text-body-secondary">Example Subject</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <div>
                        <button onClick={() => setModalShow(true)} className='btn btn-outline-danger'>Delete</button>
                        <MyVerticallyCenteredModal
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                />
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body ">
                    <div>
                        <h5 className="card-title">Name</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">example@demo.com</h6>
                        <h6 className="card-subtitle mb-2 text-body-secondary">Example Subject</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <div>
                        <button onClick={() => setModalShow(true)} className='btn btn-outline-danger'>Delete</button>
                        <MyVerticallyCenteredModal
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                />
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body ">
                    <div>
                        <h5 className="card-title">Name</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">example@demo.com</h6>
                        <h6 className="card-subtitle mb-2 text-body-secondary">Example Subject</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <div>
                        <button onClick={() => setModalShow(true)} className='btn btn-outline-danger'>Delete</button>
                        <MyVerticallyCenteredModal
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                />
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body ">
                    <div>
                        <h5 className="card-title">Name</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">example@demo.com</h6>
                        <h6 className="card-subtitle mb-2 text-body-secondary">Example Subject</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <div>
                        <button onClick={() => setModalShow(true)} className='btn btn-outline-danger'>Delete</button>
                        <MyVerticallyCenteredModal
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                />
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body ">
                    <div>
                        <h5 className="card-title">Name</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">example@demo.com</h6>
                        <h6 className="card-subtitle mb-2 text-body-secondary">Example Subject</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <div>
                        <button onClick={() => setModalShow(true)} className='btn btn-outline-danger'>Delete</button>
                        <MyVerticallyCenteredModal
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                />
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body ">
                    <div>
                        <h5 className="card-title">Name</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">example@demo.com</h6>
                        <h6 className="card-subtitle mb-2 text-body-secondary">Example Subject</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <div>
                        <button onClick={() => setModalShow(true)} className='btn btn-outline-danger'>Delete</button>
                        <MyVerticallyCenteredModal
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashContact;