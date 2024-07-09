// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import './bookingsummary.css';
// import Navbar from '../navbar/Navbar';
// // import { db, auth } from '../../firebaseConfig';
// const BookingSummary = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const [selectedFood, setSelectedFood] = useState([]);

//   // Navigate to home if no state is found
//   if (!location.state) {
//     navigate('/');
//     return null;
//   }

//   const { selectedSeats, totalPrice } = location.state;

//   const foodItems = [
//     { name: 'BBQ Grilled Chicken Burger', price: 230, calories: 489, imgSrc: '/food items/mountaindew.webp' },
//     { name: 'BBQ Hot Dog', price: 220, calories: 336, imgSrc: '/food items/popcornmedium.jpg' },
//     { name: 'Crispy Paneer Burger', price: 250, calories: 653, imgSrc: '/food items/burger.jpg' },
//     { name: 'Garden Fresh Veggies Pizza', price: 330, calories: 732, imgSrc: '/food items/pizza.jpg' },
//     { name: 'Large Nachos Combo', price: 530, calories: 665, imgSrc: '/food items/nachos.jpg' },
//     { name: 'Medium Popcorn Salted', price: 420, calories: 849, imgSrc: '/food items/popcorn.jpg' },
//     { name: 'Medium Popcorn Caramel', price: 470, calories: 826, imgSrc: '/food items/caramel.jpg' },
//     { name: 'Margherita Pizza', price: 330, calories: 732, imgSrc: '/food items/margherita.jpg' }
//   ];

//   const handleAddFood = (item) => {
//     setSelectedFood([...selectedFood, item]);
//   };

//   const getFoodTotal = () => {
//     return selectedFood.reduce((total, item) => total + item.price, 0);
//   };


//   const amount = 500;
//   const currency = "INR";
//   const receiptId = "qwsaq1";

//   const handleProceed = async(e) => {
//     // Add your proceed logic here
//     const response = await fetch("http://localhost:5000/order", {
//       method: "POST",
//       body: JSON.stringify({
//         amount,
//         currency,
//         receipt: receiptId,
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const order = await response.json();
//     console.log(order);

//     var options = {
//       "key": "rzp_test_b0SUGjmbEoC8GI", // Enter the Key ID generated from the Dashboard
//       amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
//       currency,
//       "name": "Acme Corp", //your business name
//       "description": "Test Transaction",
//       "image": "https://example.com/your_logo",
//       "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
//       "handler": function (response){
//           alert(response.razorpay_payment_id);
//           alert(response.razorpay_order_id);
//           alert(response.razorpay_signature)
//       },
//       "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
//           "name": "Gaurav Kumar", //your customer's name
//           "email": "gaurav.kumar@example.com", 
//           "contact": "9000090000"  //Provide the customer's phone number for better conversion rates 
//       },
//       "notes": {
//           "address": "Razorpay Corporate Office"
//       },
//       "theme": {
//           "color": "#3399cc"
//       }
//   };
//   var rzp1 = new window.Razorpay(options);
//   rzp1.on('payment.failed', function (response){
//           alert(response.error.code);
//           alert(response.error.description);
//           alert(response.error.source);
//           alert(response.error.step);
//           alert(response.error.reason);
//           alert(response.error.metadata.order_id);
//           alert(response.error.metadata.payment_id);
//   });
//   rzp1.open();
//     e.preventDefault();
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="booking-summary-page">
//         <div className="beverages">
//           <h3>Select Beverages and Food</h3>
//           <div className="food-grid">
//             {foodItems.map((item, index) => (
//               <div className="food-item" key={index}>
//                 <img src={item.imgSrc} alt={item.name} className="food-image" />
//                 <span className="food-name">{item.name} {item.calories} kcal</span>
//                 <span className="food-price">₹{item.price}</span>
//                 <button onClick={() => handleAddFood(item)}>Add</button>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="summary-details">
//           <h3>Booking Summary</h3>
//           <p>Selected Seats: {selectedSeats.join(', ')}</p>
//           <p>Total Price for Tickets: ₹{totalPrice}</p>
//           <p>Food Total: ₹{getFoodTotal()}</p>
//           <p>Grand Total: ₹{totalPrice + getFoodTotal()}</p>
//           <button className="btn" onClick={handleProceed}>Proceed</button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BookingSummary;




















import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './bookingsummary.css';
import Navbar from '../navbar/Navbar';

const BookingSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [selectedFood, setSelectedFood] = useState([]);

  // Navigate to home if no state is found
  if (!location.state) {
    navigate('/');
    return null;
  }

  const { selectedSeats, totalPrice } = location.state;

  const foodItems = [
    { name: 'BBQ Grilled Chicken Burger', price: 230, calories: 489, imgSrc: '/food items/mountaindew.webp' },
    { name: 'BBQ Hot Dog', price: 220, calories: 336, imgSrc: '/food items/popcornmedium.jpg' },
    { name: 'Crispy Paneer Burger', price: 250, calories: 653, imgSrc: '/food items/burger.jpg' },
    { name: 'Garden Fresh Veggies Pizza', price: 330, calories: 732, imgSrc: '/food items/pizza.jpg' },
    { name: 'Large Nachos Combo', price: 530, calories: 665, imgSrc: '/food items/nachos.jpg' },
    { name: 'Medium Popcorn Salted', price: 420, calories: 849, imgSrc: '/food items/popcorn.jpg' },
    { name: 'Medium Popcorn Caramel', price: 470, calories: 826, imgSrc: '/food items/caramel.jpg' },
    { name: 'Margherita Pizza', price: 330, calories: 732, imgSrc: '/food items/margherita.jpg' }
  ];

  const handleAddFood = (item) => {
    setSelectedFood([...selectedFood, item]);
  };

  const getFoodTotal = () => {
    return selectedFood.reduce((total, item) => total + item.price, 0);
  };

  const handleProceed = async (e) => {
    const grandTotal = totalPrice + getFoodTotal();
    const receiptId = `receipt_${new Date().getTime()}`;

    // Create order on server
    const response = await fetch("http://localhost:5000/order", {
      method: "POST",
      body: JSON.stringify({
        amount: grandTotal * 100, // Razorpay amount is in paise
        currency: "INR",
        receipt: receiptId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const order = await response.json();

    const options = {
      key: "rzp_test_b0SUGjmbEoC8GI", // Replace with your Razorpay key
      amount: grandTotal * 100, // Amount in paise
      currency: "INR",
      name: "Ticket Booking Application",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order.id,
      handler: async function (response) {
        // alert(`Payment ID: ${response.razorpay_payment_id}`);
        // alert(`Order ID: ${response.razorpay_order_id}`);
        // alert(`Signature: ${response.razorpay_signature}`);
        const body = {
          ...response,
        };

        const validateRes = await fetch(
          "http://localhost:5000/order/validate",
          {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const jsonRes = await validateRes.json();
        console.log(jsonRes);
        // Save booking and mark seats as booked here
      },
      prefill: {
        name: "Gaurav Kumar", // You can replace this with dynamic user name
        email: "gaurav.kumar@example.com", // You can replace this with dynamic user email
        contact: "9000090000" // You can replace this with dynamic user contact
      },
      notes: {
        address: "Razorpay Corporate Office"
      },
      theme: {
        color: "#3399cc"
      }
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.on('payment.failed', function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    rzp1.open();
    e.preventDefault();
  };

  return (
    <>
      <Navbar />
      <div className="booking-summary-page">
        <div className="beverages">
          <h3>Select Beverages and Food</h3>
          <div className="food-grid">
            {foodItems.map((item, index) => (
              <div className="food-item" key={index}>
                <img src={item.imgSrc} alt={item.name} className="food-image" />
                <span className="food-name">{item.name} {item.calories} kcal</span>
                <span className="food-price">₹{item.price}</span>
                <button onClick={() => handleAddFood(item)}>Add</button>
              </div>
            ))}
          </div>
        </div>
        <div className="summary-details">
          <h3>Booking Summary</h3>
          <p>Selected Seats: {selectedSeats.join(', ')}</p>
          <p>Total Price for Tickets: ₹{totalPrice}</p>
          <p>Food Total: ₹{getFoodTotal()}</p>
          <p>Grand Total: ₹{totalPrice + getFoodTotal()}</p>
          <button className="btn" onClick={handleProceed}>Proceed</button>
        </div>
      </div>
    </>
  );
};

export default BookingSummary;
