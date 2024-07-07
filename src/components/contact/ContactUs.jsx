import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_7ngqcby', 'template_hwn91me', form.current, 'yo2bGVnowbQDHupsF')
            .then(
                () => {
                    alert('Success');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <>
        <Navbar/>
        <div className="contact-container">
            <div className="contact-wrapper">
                <div className="contact-grid">
                    <div className="contact-info">
                        <h1 className="contact-title">Get in touch:</h1>
                        <p className="contact-description">Fill in the form to start a conversation</p>

                        <div className="contact-item">
                            <svg viewBox="0 0 24 24" className="contact-icon">
                                <path
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                            <div className="contact-text"> 30 k 8 Jyoti Nagar,Jaipur, RJ</div>
                        </div>

                        <div className="contact-item">
                            <svg viewBox="0 0 24 24" className="contact-icon">
                                <path
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                />
                            </svg>
                            <div className="contact-text">+91 7891989967</div>
                        </div>

                        <div className="contact-item">
                            <svg viewBox="0 0 24 24" className="contact-icon">
                                <path
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                            <div className="contact-text">04tarungoyal@gmail.com</div>
                        </div>
                    </div>

                     <form ref={form} onSubmit={sendEmail} className="contact-form"> 
                    {/* <form ref={form} className="contact-form"> */}
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Full Name</label>
                            <input
                                type="name"
                                name="user_name"
                                id="name"
                                placeholder="Full Name"
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                name="user_email"
                                id="email"
                                placeholder="Email"
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="tel" className="form-label">Message</label>
                            <input
                                type="tel"
                                name="message"
                                id="tel"
                                placeholder="Message"
                                className="form-input"
                            />
                        </div>

                        <button
                            type="submit"
                            className="form-submit"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}
