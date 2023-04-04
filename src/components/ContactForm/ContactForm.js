import React from 'react';
import contactForm from './contactForm.css';

const ContactForm = () => {
    return (
        <div className="col-md-8 contact-form">
            <div className="section-title">
                <h2>Contact Us</h2>
                <hr />
            </div>
            <form>
                <label htmlFor="name">Full Name</label><br />
                <input type="text" name='name' placeholder='Your Full Name' />
                <br /><br />
                <label htmlFor="email">Email</label><br />
                <input type="email" name='email' placeholder='Your Email' />
                <br /><br />
                <label htmlFor="phone">Phone/Mobile</label><br />
                <input type="text" name='phone' placeholder='Your Phone/Mobile No' />
                <br /><br />
                <label htmlFor="">DEPARTMENT INTERESTED TO WORK AND WHY?</label><br />
                <textarea className='textarea1'></textarea>
                <br /><br />
                <label>DESCRIBE YOURSELF IN 100 WORDS</label><br />
                <textarea className='textarea2'></textarea>
                <br />
                <input type="submit" value="submit application" />
            </form>
        </div>
    );
};

export default ContactForm;