import React from 'react';
import './pricingpolicy.css';

const PricingPolicy = () => {
    return (
        <div className="pricing-container">
            <h1>Pricing Policy</h1>
            <p>Our pricing policy for movie tickets is transparent and straightforward.</p>
            <h2>1. Ticket Prices</h2>
            <p>Prices for tickets vary based on the type of movie, day of the week, and showtime.</p>
            <h2>2. Discounts and Offers</h2>
            <p>We offer various discounts and promotional offers which are updated regularly.</p>
            <h2>3. Payment Methods</h2>
            <p>We accept multiple payment methods including credit cards, debit cards, and online wallets.</p>
            {/* Add more sections as needed */}
        </div>
    );
}

export default PricingPolicy;
