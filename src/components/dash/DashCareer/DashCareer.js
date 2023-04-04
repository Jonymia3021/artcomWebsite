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
            <h4>Are you sure you want to delete International Rice Research Institute (IRRI)?</h4>
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

const DashCareer = () => {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className='dash-team'>
            <div className="dash-btn-group">
                <Link className='disable' to='/admin/career'>see all Jobs</Link>
                <Link to='/admin/career/add'>add new Jobs</Link>
            </div>
                <div className='dash-team-list'>
                    <div class="card">
                        <img className='img-thumbnail' src={img} alt="" />
                        <div class="card-body">
                            <h5 class="card-title">International Rice Research Institute (IRRI)</h5>
                            <p className='card-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde esse quas voluptate pariatur voluptates libero doloribus sint, quibusdam, velit fugiat, facere mollitia eos distinctio culpa? Animi, consectetur, officia quod vel aperiam reiciendis facere odio quisquam impedit consequuntur ipsum minus adipisci, sed ad corrupti aut recusandae hic. Molestias veritatis, aut, unde explicabo ullam vero iure, incidunt vel facilis provident non ipsa perferendis? Aperiam unde perferendis vero autem in voluptatem dolorum consectetur reiciendis deleniti atque, sed architecto eligendi, esse accusantium blanditiis dolores rem sunt quis expedita, tempore aliquid velit. Quibusdam earum, ratione aspernatur laboriosam nesciunt dolorem ullam debitis natus modi unde itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dicta possimus voluptatibus optio cum pariatur iusto vitae sit? Eum similique nulla autem rem reiciendis distinctio vitae, voluptatem velit impedit hic tempora voluptate? Quis quod praesentium quos veniam, nihil labore beatae. Vel, nemo eligendi perspiciatis eum magni dolorem quae, et dolorum consequuntur harum minus repellendus. Quibusdam assumenda officiis mollitia cumque, maxime non dolorum libero. Earum soluta cupiditate consectetur enim? Illum ipsum cum consequuntur dolor quasi aperiam, non sint nihil dolores, iusto dicta amet quae voluptatem similique vel? Veniam vitae at ut deserunt cumque, unde hic. Fugit perferendis est eum excepturi corporis totam hic rem modi ab, unde vitae voluptate? Fugit quos facilis nesciunt repudiandae odit repellat saepe ex, veritatis illum nulla quae temporibus unde possimus iste veniam quis expedita nisi assumenda est iusto quidem neque minima quo! Omnis repellat autem voluptas exercitationem nostrum impedit corporis illo sint ex soluta! Perspiciatis placeat error sunt at nesciunt voluptatem maxime doloribus dolores maiores optio. Voluptas accusantium asperiores dicta libero magni, repudiandae sapiente soluta cum optio expedita natus. Dolorum aspernatur, excepturi molestias tempore perferendis consectetur adipisci voluptatum modi facere enim atque quaerat eveniet, laudantium qui nostrum exercitationem vero, et necessitatibus. Eum beatae aut impedit fugit!</p>
                            <div>
                                <Link to='/admin/career/edit' className='btn btn-outline-secondary'>Edit</Link>
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
                            <h5 class="card-title">International Rice Research Institute (IRRI)</h5>
                            <p className='card-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde esse quas voluptate pariatur voluptates libero doloribus sint, quibusdam, velit fugiat, facere mollitia eos distinctio culpa? Animi, consectetur, officia quod vel aperiam reiciendis facere odio quisquam impedit consequuntur ipsum minus adipisci, sed ad corrupti aut recusandae hic. Molestias veritatis, aut, unde explicabo ullam vero iure, incidunt vel facilis provident non ipsa perferendis? Aperiam unde perferendis vero autem in voluptatem dolorum consectetur reiciendis deleniti atque, sed architecto eligendi, esse accusantium blanditiis dolores rem sunt quis expedita, tempore aliquid velit. Quibusdam earum, ratione aspernatur laboriosam nesciunt dolorem ullam debitis natus modi unde itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dicta possimus voluptatibus optio cum pariatur iusto vitae sit? Eum similique nulla autem rem reiciendis distinctio vitae, voluptatem velit impedit hic tempora voluptate? Quis quod praesentium quos veniam, nihil labore beatae. Vel, nemo eligendi perspiciatis eum magni dolorem quae, et dolorum consequuntur harum minus repellendus. Quibusdam assumenda officiis mollitia cumque, maxime non dolorum libero. Earum soluta cupiditate consectetur enim? Illum ipsum cum consequuntur dolor quasi aperiam, non sint nihil dolores, iusto dicta amet quae voluptatem similique vel? Veniam vitae at ut deserunt cumque, unde hic. Fugit perferendis est eum excepturi corporis totam hic rem modi ab, unde vitae voluptate? Fugit quos facilis nesciunt repudiandae odit repellat saepe ex, veritatis illum nulla quae temporibus unde possimus iste veniam quis expedita nisi assumenda est iusto quidem neque minima quo! Omnis repellat autem voluptas exercitationem nostrum impedit corporis illo sint ex soluta! Perspiciatis placeat error sunt at nesciunt voluptatem maxime doloribus dolores maiores optio. Voluptas accusantium asperiores dicta libero magni, repudiandae sapiente soluta cum optio expedita natus. Dolorum aspernatur, excepturi molestias tempore perferendis consectetur adipisci voluptatum modi facere enim atque quaerat eveniet, laudantium qui nostrum exercitationem vero, et necessitatibus. Eum beatae aut impedit fugit!</p>
                            <div>
                                <Link to='/admin/career/edit' className='btn btn-outline-secondary'>Edit</Link>
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
                            <h5 class="card-title">International Rice Research Institute (IRRI)</h5>
                            <p className='card-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde esse quas voluptate pariatur voluptates libero doloribus sint, quibusdam, velit fugiat, facere mollitia eos distinctio culpa? Animi, consectetur, officia quod vel aperiam reiciendis facere odio quisquam impedit consequuntur ipsum minus adipisci, sed ad corrupti aut recusandae hic. Molestias veritatis, aut, unde explicabo ullam vero iure, incidunt vel facilis provident non ipsa perferendis? Aperiam unde perferendis vero autem in voluptatem dolorum consectetur reiciendis deleniti atque, sed architecto eligendi, esse accusantium blanditiis dolores rem sunt quis expedita, tempore aliquid velit. Quibusdam earum, ratione aspernatur laboriosam nesciunt dolorem ullam debitis natus modi unde itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dicta possimus voluptatibus optio cum pariatur iusto vitae sit? Eum similique nulla autem rem reiciendis distinctio vitae, voluptatem velit impedit hic tempora voluptate? Quis quod praesentium quos veniam, nihil labore beatae. Vel, nemo eligendi perspiciatis eum magni dolorem quae, et dolorum consequuntur harum minus repellendus. Quibusdam assumenda officiis mollitia cumque, maxime non dolorum libero. Earum soluta cupiditate consectetur enim? Illum ipsum cum consequuntur dolor quasi aperiam, non sint nihil dolores, iusto dicta amet quae voluptatem similique vel? Veniam vitae at ut deserunt cumque, unde hic. Fugit perferendis est eum excepturi corporis totam hic rem modi ab, unde vitae voluptate? Fugit quos facilis nesciunt repudiandae odit repellat saepe ex, veritatis illum nulla quae temporibus unde possimus iste veniam quis expedita nisi assumenda est iusto quidem neque minima quo! Omnis repellat autem voluptas exercitationem nostrum impedit corporis illo sint ex soluta! Perspiciatis placeat error sunt at nesciunt voluptatem maxime doloribus dolores maiores optio. Voluptas accusantium asperiores dicta libero magni, repudiandae sapiente soluta cum optio expedita natus. Dolorum aspernatur, excepturi molestias tempore perferendis consectetur adipisci voluptatum modi facere enim atque quaerat eveniet, laudantium qui nostrum exercitationem vero, et necessitatibus. Eum beatae aut impedit fugit!</p>
                            <div>
                                <Link to='/admin/career/edit' className='btn btn-outline-secondary'>Edit</Link>
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
                            <h5 class="card-title">International Rice Research Institute (IRRI)</h5>
                            <p className='card-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde esse quas voluptate pariatur voluptates libero doloribus sint, quibusdam, velit fugiat, facere mollitia eos distinctio culpa? Animi, consectetur, officia quod vel aperiam reiciendis facere odio quisquam impedit consequuntur ipsum minus adipisci, sed ad corrupti aut recusandae hic. Molestias veritatis, aut, unde explicabo ullam vero iure, incidunt vel facilis provident non ipsa perferendis? Aperiam unde perferendis vero autem in voluptatem dolorum consectetur reiciendis deleniti atque, sed architecto eligendi, esse accusantium blanditiis dolores rem sunt quis expedita, tempore aliquid velit. Quibusdam earum, ratione aspernatur laboriosam nesciunt dolorem ullam debitis natus modi unde itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dicta possimus voluptatibus optio cum pariatur iusto vitae sit? Eum similique nulla autem rem reiciendis distinctio vitae, voluptatem velit impedit hic tempora voluptate? Quis quod praesentium quos veniam, nihil labore beatae. Vel, nemo eligendi perspiciatis eum magni dolorem quae, et dolorum consequuntur harum minus repellendus. Quibusdam assumenda officiis mollitia cumque, maxime non dolorum libero. Earum soluta cupiditate consectetur enim? Illum ipsum cum consequuntur dolor quasi aperiam, non sint nihil dolores, iusto dicta amet quae voluptatem similique vel? Veniam vitae at ut deserunt cumque, unde hic. Fugit perferendis est eum excepturi corporis totam hic rem modi ab, unde vitae voluptate? Fugit quos facilis nesciunt repudiandae odit repellat saepe ex, veritatis illum nulla quae temporibus unde possimus iste veniam quis expedita nisi assumenda est iusto quidem neque minima quo! Omnis repellat autem voluptas exercitationem nostrum impedit corporis illo sint ex soluta! Perspiciatis placeat error sunt at nesciunt voluptatem maxime doloribus dolores maiores optio. Voluptas accusantium asperiores dicta libero magni, repudiandae sapiente soluta cum optio expedita natus. Dolorum aspernatur, excepturi molestias tempore perferendis consectetur adipisci voluptatum modi facere enim atque quaerat eveniet, laudantium qui nostrum exercitationem vero, et necessitatibus. Eum beatae aut impedit fugit!</p>
                            <div>
                                <Link to='/admin/career/edit' className='btn btn-outline-secondary'>Edit</Link>
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
                            <h5 class="card-title">International Rice Research Institute (IRRI)</h5>
                            <p className='card-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde esse quas voluptate pariatur voluptates libero doloribus sint, quibusdam, velit fugiat, facere mollitia eos distinctio culpa? Animi, consectetur, officia quod vel aperiam reiciendis facere odio quisquam impedit consequuntur ipsum minus adipisci, sed ad corrupti aut recusandae hic. Molestias veritatis, aut, unde explicabo ullam vero iure, incidunt vel facilis provident non ipsa perferendis? Aperiam unde perferendis vero autem in voluptatem dolorum consectetur reiciendis deleniti atque, sed architecto eligendi, esse accusantium blanditiis dolores rem sunt quis expedita, tempore aliquid velit. Quibusdam earum, ratione aspernatur laboriosam nesciunt dolorem ullam debitis natus modi unde itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dicta possimus voluptatibus optio cum pariatur iusto vitae sit? Eum similique nulla autem rem reiciendis distinctio vitae, voluptatem velit impedit hic tempora voluptate? Quis quod praesentium quos veniam, nihil labore beatae. Vel, nemo eligendi perspiciatis eum magni dolorem quae, et dolorum consequuntur harum minus repellendus. Quibusdam assumenda officiis mollitia cumque, maxime non dolorum libero. Earum soluta cupiditate consectetur enim? Illum ipsum cum consequuntur dolor quasi aperiam, non sint nihil dolores, iusto dicta amet quae voluptatem similique vel? Veniam vitae at ut deserunt cumque, unde hic. Fugit perferendis est eum excepturi corporis totam hic rem modi ab, unde vitae voluptate? Fugit quos facilis nesciunt repudiandae odit repellat saepe ex, veritatis illum nulla quae temporibus unde possimus iste veniam quis expedita nisi assumenda est iusto quidem neque minima quo! Omnis repellat autem voluptas exercitationem nostrum impedit corporis illo sint ex soluta! Perspiciatis placeat error sunt at nesciunt voluptatem maxime doloribus dolores maiores optio. Voluptas accusantium asperiores dicta libero magni, repudiandae sapiente soluta cum optio expedita natus. Dolorum aspernatur, excepturi molestias tempore perferendis consectetur adipisci voluptatum modi facere enim atque quaerat eveniet, laudantium qui nostrum exercitationem vero, et necessitatibus. Eum beatae aut impedit fugit!</p>
                            <div>
                                <Link to='/admin/career/edit' className='btn btn-outline-secondary'>Edit</Link>
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
                            <h5 class="card-title">International Rice Research Institute (IRRI)</h5>
                            <p className='card-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde esse quas voluptate pariatur voluptates libero doloribus sint, quibusdam, velit fugiat, facere mollitia eos distinctio culpa? Animi, consectetur, officia quod vel aperiam reiciendis facere odio quisquam impedit consequuntur ipsum minus adipisci, sed ad corrupti aut recusandae hic. Molestias veritatis, aut, unde explicabo ullam vero iure, incidunt vel facilis provident non ipsa perferendis? Aperiam unde perferendis vero autem in voluptatem dolorum consectetur reiciendis deleniti atque, sed architecto eligendi, esse accusantium blanditiis dolores rem sunt quis expedita, tempore aliquid velit. Quibusdam earum, ratione aspernatur laboriosam nesciunt dolorem ullam debitis natus modi unde itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dicta possimus voluptatibus optio cum pariatur iusto vitae sit? Eum similique nulla autem rem reiciendis distinctio vitae, voluptatem velit impedit hic tempora voluptate? Quis quod praesentium quos veniam, nihil labore beatae. Vel, nemo eligendi perspiciatis eum magni dolorem quae, et dolorum consequuntur harum minus repellendus. Quibusdam assumenda officiis mollitia cumque, maxime non dolorum libero. Earum soluta cupiditate consectetur enim? Illum ipsum cum consequuntur dolor quasi aperiam, non sint nihil dolores, iusto dicta amet quae voluptatem similique vel? Veniam vitae at ut deserunt cumque, unde hic. Fugit perferendis est eum excepturi corporis totam hic rem modi ab, unde vitae voluptate? Fugit quos facilis nesciunt repudiandae odit repellat saepe ex, veritatis illum nulla quae temporibus unde possimus iste veniam quis expedita nisi assumenda est iusto quidem neque minima quo! Omnis repellat autem voluptas exercitationem nostrum impedit corporis illo sint ex soluta! Perspiciatis placeat error sunt at nesciunt voluptatem maxime doloribus dolores maiores optio. Voluptas accusantium asperiores dicta libero magni, repudiandae sapiente soluta cum optio expedita natus. Dolorum aspernatur, excepturi molestias tempore perferendis consectetur adipisci voluptatum modi facere enim atque quaerat eveniet, laudantium qui nostrum exercitationem vero, et necessitatibus. Eum beatae aut impedit fugit!</p>
                            <div>
                                <Link to='/admin/career/edit' className='btn btn-outline-secondary'>Edit</Link>
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
                            <h5 class="card-title">International Rice Research Institute (IRRI)</h5>
                            <p className='card-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde esse quas voluptate pariatur voluptates libero doloribus sint, quibusdam, velit fugiat, facere mollitia eos distinctio culpa? Animi, consectetur, officia quod vel aperiam reiciendis facere odio quisquam impedit consequuntur ipsum minus adipisci, sed ad corrupti aut recusandae hic. Molestias veritatis, aut, unde explicabo ullam vero iure, incidunt vel facilis provident non ipsa perferendis? Aperiam unde perferendis vero autem in voluptatem dolorum consectetur reiciendis deleniti atque, sed architecto eligendi, esse accusantium blanditiis dolores rem sunt quis expedita, tempore aliquid velit. Quibusdam earum, ratione aspernatur laboriosam nesciunt dolorem ullam debitis natus modi unde itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dicta possimus voluptatibus optio cum pariatur iusto vitae sit? Eum similique nulla autem rem reiciendis distinctio vitae, voluptatem velit impedit hic tempora voluptate? Quis quod praesentium quos veniam, nihil labore beatae. Vel, nemo eligendi perspiciatis eum magni dolorem quae, et dolorum consequuntur harum minus repellendus. Quibusdam assumenda officiis mollitia cumque, maxime non dolorum libero. Earum soluta cupiditate consectetur enim? Illum ipsum cum consequuntur dolor quasi aperiam, non sint nihil dolores, iusto dicta amet quae voluptatem similique vel? Veniam vitae at ut deserunt cumque, unde hic. Fugit perferendis est eum excepturi corporis totam hic rem modi ab, unde vitae voluptate? Fugit quos facilis nesciunt repudiandae odit repellat saepe ex, veritatis illum nulla quae temporibus unde possimus iste veniam quis expedita nisi assumenda est iusto quidem neque minima quo! Omnis repellat autem voluptas exercitationem nostrum impedit corporis illo sint ex soluta! Perspiciatis placeat error sunt at nesciunt voluptatem maxime doloribus dolores maiores optio. Voluptas accusantium asperiores dicta libero magni, repudiandae sapiente soluta cum optio expedita natus. Dolorum aspernatur, excepturi molestias tempore perferendis consectetur adipisci voluptatum modi facere enim atque quaerat eveniet, laudantium qui nostrum exercitationem vero, et necessitatibus. Eum beatae aut impedit fugit!</p>
                            <div>
                                <Link to='/admin/career/edit' className='btn btn-outline-secondary'>Edit</Link>
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
                            <h5 class="card-title">International Rice Research Institute (IRRI)</h5>
                            <p className='card-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde esse quas voluptate pariatur voluptates libero doloribus sint, quibusdam, velit fugiat, facere mollitia eos distinctio culpa? Animi, consectetur, officia quod vel aperiam reiciendis facere odio quisquam impedit consequuntur ipsum minus adipisci, sed ad corrupti aut recusandae hic. Molestias veritatis, aut, unde explicabo ullam vero iure, incidunt vel facilis provident non ipsa perferendis? Aperiam unde perferendis vero autem in voluptatem dolorum consectetur reiciendis deleniti atque, sed architecto eligendi, esse accusantium blanditiis dolores rem sunt quis expedita, tempore aliquid velit. Quibusdam earum, ratione aspernatur laboriosam nesciunt dolorem ullam debitis natus modi unde itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dicta possimus voluptatibus optio cum pariatur iusto vitae sit? Eum similique nulla autem rem reiciendis distinctio vitae, voluptatem velit impedit hic tempora voluptate? Quis quod praesentium quos veniam, nihil labore beatae. Vel, nemo eligendi perspiciatis eum magni dolorem quae, et dolorum consequuntur harum minus repellendus. Quibusdam assumenda officiis mollitia cumque, maxime non dolorum libero. Earum soluta cupiditate consectetur enim? Illum ipsum cum consequuntur dolor quasi aperiam, non sint nihil dolores, iusto dicta amet quae voluptatem similique vel? Veniam vitae at ut deserunt cumque, unde hic. Fugit perferendis est eum excepturi corporis totam hic rem modi ab, unde vitae voluptate? Fugit quos facilis nesciunt repudiandae odit repellat saepe ex, veritatis illum nulla quae temporibus unde possimus iste veniam quis expedita nisi assumenda est iusto quidem neque minima quo! Omnis repellat autem voluptas exercitationem nostrum impedit corporis illo sint ex soluta! Perspiciatis placeat error sunt at nesciunt voluptatem maxime doloribus dolores maiores optio. Voluptas accusantium asperiores dicta libero magni, repudiandae sapiente soluta cum optio expedita natus. Dolorum aspernatur, excepturi molestias tempore perferendis consectetur adipisci voluptatum modi facere enim atque quaerat eveniet, laudantium qui nostrum exercitationem vero, et necessitatibus. Eum beatae aut impedit fugit!</p>
                            <div>
                                <Link to='/admin/career/edit' className='btn btn-outline-secondary'>Edit</Link>
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
                            <h5 class="card-title">International Rice Research Institute (IRRI)</h5>
                            <p className='card-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde esse quas voluptate pariatur voluptates libero doloribus sint, quibusdam, velit fugiat, facere mollitia eos distinctio culpa? Animi, consectetur, officia quod vel aperiam reiciendis facere odio quisquam impedit consequuntur ipsum minus adipisci, sed ad corrupti aut recusandae hic. Molestias veritatis, aut, unde explicabo ullam vero iure, incidunt vel facilis provident non ipsa perferendis? Aperiam unde perferendis vero autem in voluptatem dolorum consectetur reiciendis deleniti atque, sed architecto eligendi, esse accusantium blanditiis dolores rem sunt quis expedita, tempore aliquid velit. Quibusdam earum, ratione aspernatur laboriosam nesciunt dolorem ullam debitis natus modi unde itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dicta possimus voluptatibus optio cum pariatur iusto vitae sit? Eum similique nulla autem rem reiciendis distinctio vitae, voluptatem velit impedit hic tempora voluptate? Quis quod praesentium quos veniam, nihil labore beatae. Vel, nemo eligendi perspiciatis eum magni dolorem quae, et dolorum consequuntur harum minus repellendus. Quibusdam assumenda officiis mollitia cumque, maxime non dolorum libero. Earum soluta cupiditate consectetur enim? Illum ipsum cum consequuntur dolor quasi aperiam, non sint nihil dolores, iusto dicta amet quae voluptatem similique vel? Veniam vitae at ut deserunt cumque, unde hic. Fugit perferendis est eum excepturi corporis totam hic rem modi ab, unde vitae voluptate? Fugit quos facilis nesciunt repudiandae odit repellat saepe ex, veritatis illum nulla quae temporibus unde possimus iste veniam quis expedita nisi assumenda est iusto quidem neque minima quo! Omnis repellat autem voluptas exercitationem nostrum impedit corporis illo sint ex soluta! Perspiciatis placeat error sunt at nesciunt voluptatem maxime doloribus dolores maiores optio. Voluptas accusantium asperiores dicta libero magni, repudiandae sapiente soluta cum optio expedita natus. Dolorum aspernatur, excepturi molestias tempore perferendis consectetur adipisci voluptatum modi facere enim atque quaerat eveniet, laudantium qui nostrum exercitationem vero, et necessitatibus. Eum beatae aut impedit fugit!</p>
                            <div>
                                <Link to='/admin/career/edit' className='btn btn-outline-secondary'>Edit</Link>
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

export default DashCareer;