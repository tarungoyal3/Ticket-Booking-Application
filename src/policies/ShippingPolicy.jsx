import React from 'react';
import './shippingpolicy.css';

const ShippingPolicy = () => {
    return (
        <div className="shipping-container">
            <h1>Shipping Policy</h1>
            <p>Our shipping policy outlines the delivery terms for our physical movie tickets and merchandise.</p>
            <h2>1. Delivery Methods</h2>
            <p>We offer various delivery methods including standard shipping and express shipping.</p>
            <h2>2. Shipping Timeline</h2>
            <p>Standard shipping takes 5-7 working days, while express shipping takes 2-3 working days.</p>
            <h2>3. Shipping Charges</h2>
            <p>Shipping charges vary based on the delivery method chosen and the delivery location.</p>
            {/* Add more sections as needed */}
        </div>
    );
}

export default ShippingPolicy;
