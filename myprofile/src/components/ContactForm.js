import React from 'react';
import '../components/Navbar.css';

function ContactForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="contact-form">
        <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" placeholder='Full name'/>
            <input type="email" placeholder='Email'/>
            <textarea cols="7" placeholder='What is this'></textarea>
            <input type="submit" value='Send'/>
        </form>
    </div>
    )
}

export default ContactForm
