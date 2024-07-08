import React from 'react';
import axios from 'axios';

const RazorpayPayment = ({ amount, onSuccess }) => {

  const handlePayment = async () => {
    const res = await axios.post('/api/create-order', { amount });

    const options = {
      key: process.env, // Your Razorpay Key ID
      amount: res.data.amount,
      currency: 'INR',
      name: 'Movie Ticket Booking',
      description: 'Test Transaction',
      order_id: res.data.id,
      handler: function (response) {
        axios.post('/api/verify-payment', {
          order_id: res.data.id,
          payment_id: response.razorpay_payment_id,
          signature: response.razorpay_signature
        }).then(() => {
          onSuccess();
        }).catch(error => {
          console.error('Payment verification failed', error);
        });
      },
      prefill: {
        name: 'Your Name',
        email: 'your.email@example.com',
        contact: '9999999999'
      },
      notes: {
        address: 'Your Address'
      },
      theme: {
        color: '#F37254'
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <button onClick={handlePayment}>
      Pay ₹{amount}
    </button>
  );
};

export default RazorpayPayment;
