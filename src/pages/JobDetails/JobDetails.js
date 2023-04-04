import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import jobDetails from './jobDetails.css';

const JobDetails = () => {
    return (
        <section id="job-details">
            <div className="section-img-box">
                <h1>IRRI</h1>
            </div>
            <div className="container">
                <div className="row">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde esse quas voluptate pariatur voluptates libero doloribus sint, quibusdam, velit fugiat, facere mollitia eos distinctio culpa? Animi, consectetur, officia quod vel aperiam reiciendis facere odio quisquam impedit consequuntur ipsum minus adipisci, sed ad corrupti aut recusandae hic. Molestias veritatis, aut, unde explicabo ullam vero iure, incidunt vel facilis provident non ipsa perferendis? Aperiam unde perferendis vero autem in voluptatem dolorum consectetur reiciendis deleniti atque, sed architecto eligendi, esse accusantium blanditiis dolores rem sunt quis expedita, tempore aliquid velit. Quibusdam earum, ratione aspernatur laboriosam nesciunt dolorem ullam debitis natus modi unde itaque.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dicta possimus voluptatibus optio cum pariatur iusto vitae sit? Eum similique nulla autem rem reiciendis distinctio vitae, voluptatem velit impedit hic tempora voluptate? Quis quod praesentium quos veniam, nihil labore beatae. Vel, nemo eligendi perspiciatis eum magni dolorem quae, et dolorum consequuntur harum minus repellendus. Quibusdam assumenda officiis mollitia cumque, maxime non dolorum libero. Earum soluta cupiditate consectetur enim? Illum ipsum cum consequuntur dolor quasi aperiam, non sint nihil dolores, iusto dicta amet quae voluptatem similique vel? Veniam vitae at ut deserunt cumque, unde hic. Fugit perferendis est eum excepturi corporis totam hic rem modi ab, unde vitae voluptate? Fugit quos facilis nesciunt repudiandae odit repellat saepe ex, veritatis illum nulla quae temporibus unde possimus iste veniam quis expedita nisi assumenda est iusto quidem neque minima quo! Omnis repellat autem voluptas exercitationem nostrum impedit corporis illo sint ex soluta! Perspiciatis placeat error sunt at nesciunt voluptatem maxime doloribus dolores maiores optio. Voluptas accusantium asperiores dicta libero magni, repudiandae sapiente soluta cum optio expedita natus. Dolorum aspernatur, excepturi molestias tempore perferendis consectetur adipisci voluptatum modi facere enim atque quaerat eveniet, laudantium qui nostrum exercitationem vero, et necessitatibus. Eum beatae aut impedit fugit!</p>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <ContactForm></ContactForm>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </section>
    );
};

export default JobDetails;