import React from 'react';
import './termsandconditions.css';

const TermsAndConditions = () => {
    return (
        <div className="terms-container">
            <h1>Terms and Conditions</h1>
            <p>Welcome to our movie ticket booking application. Please read these terms and conditions carefully before using our service.</p>
            <h2>1. Introduction</h2>
            <p>By accessing and using our application, you accept and agree to be bound by the terms and provision of this agreement.</p>
            <h2>2. Changes to Terms</h2>
            <p>We reserve the right to update and change the terms and conditions from time to time without notice.</p>
            <h2>3. Ticket Booking</h2>
            <p>All bookings are subject to availability and confirmation of the ticket price.</p>
            {/* Add more sections as needed */}
        </div>
    );
}

export default TermsAndConditions;
