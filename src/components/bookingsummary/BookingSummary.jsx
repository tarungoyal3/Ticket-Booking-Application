import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './bookingsummary.css';
import Navbar from '../navbar/Navbar';
// import { db, auth } from '../../firebaseConfig';
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


  const amount = 500;
  const currency = "INR";
  const receiptId = "qwsaq1";

  const handleProceed = async(e) => {
    // Add your proceed logic here
    const response = await fetch("http://localhost:5000/order", {
      method: "POST",
      body: JSON.stringify({
        amount,
        currency,
        receipt: receiptId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const order = await response.json();
    console.log(order);
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





















// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import './bookingsummary.css';
// import Navbar from '../navbar/Navbar';
// import firebase from 'firebase/compat/app'; // Ensure compatibility import for older Firebase versions
// import 'firebase/compat/functions';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import Razorpay from 'razorpay';

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID",
//   measurementId: "YOUR_MEASUREMENT_ID"
// };

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// const db = firebase.firestore();
// const auth = firebase.auth();
// const functions = firebase.functions();

// const BookingSummary = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const [selectedFood, setSelectedFood] = useState([]);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setUser(user);
//     });

//     return () => unsubscribe();
//   }, []);

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

//   const handleProceed = async () => {
//     if (!user) {
//       alert("Please login to proceed");
//       return;
//     }

//     const bookingDetails = {
//       selectedSeats,
//       totalPrice,
//       foodTotal: getFoodTotal(),
//       grandTotal: totalPrice + getFoodTotal()
//     };

//     const bookingRef = await db.collection("bookings").add({
//       ...bookingDetails,
//       userId: user.uid,
//       status: "pending",
//       createdAt: new Date(),
//     });

//     const createOrder = functions.httpsCallable("createOrder");
//     const order = await createOrder({ amount: bookingDetails.grandTotal });

//     const options = {
//       key: "your-razorpay-key", // Replace with your Razorpay key
//       amount: bookingDetails.grandTotal * 100,
//       currency: "INR",
//       name: "Your Company Name",
//       description: "Test Transaction",
//       image: "https://example.com/your_logo",
//       order_id: order.data.id,
//       handler: async (response) => {
//         const verifyPayment = functions.httpsCallable("verifyPayment");
//         const verification = await verifyPayment({
//           orderId: response.razorpay_order_id,
//           paymentId: response.razorpay_payment_id,
//           signature: response.razorpay_signature,
//         });

//         if (verification.data.status === "success") {
//           await db.collection("bookings").doc(bookingRef.id).update({
//             paymentStatus: "paid",
//             paymentId: response.razorpay_payment_id,
//           });

//           selectedSeats.forEach(async seatId => {
//             await db.collection("seats").doc(seatId).update({
//               booked: true,
//             });
//           });

//           alert("Payment successful! Seats have been booked.");
//         } else {
//           alert("Payment verification failed.");
//         }
//       },
//       prefill: {
//         name: user.displayName,
//         email: user.email,
//         contact: "9999999999",
//       },
//       notes: {
//         address: "Razorpay Corporate Office",
//       },
//       theme: {
//         color: "#F37254",
//       },
//     };

//     const rzp = new Razorpay(options);
//     rzp.open();
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

