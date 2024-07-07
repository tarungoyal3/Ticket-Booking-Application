import React from 'react';
import './refundscancellation.css';

const RefundsCancellations = () => {
    return (
        <div className="refunds-container">
            <h1>Refunds and Cancellations</h1>
            <p>Our refund and cancellation policy for movie ticket bookings is as follows.</p>
            <h2>1. Cancellation Policy</h2>
            <p>You can cancel your booking up to 24 hours before the showtime for a full refund.</p>
            <h2>2. Refund Process</h2>
            <p>Refunds will be processed within 5-7 working days to the original payment method.</p>
            <h2>3. Non-Refundable Cases</h2>
            <p>No refunds will be provided for cancellations made within 24 hours of the showtime.</p>
            {/* Add more sections as needed */}
        </div>
    );
}

export default RefundsCancellations;
