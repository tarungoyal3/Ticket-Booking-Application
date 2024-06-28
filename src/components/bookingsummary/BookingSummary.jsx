// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import './bookingsummary.css';
// import Navbar from '../navbar/Navbar';

// const BookingSummary = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   if (!location.state) {
//     navigate('/');
//     return null;
//   }

//   const { selectedSeats, totalPrice } = location.state;

//   const foodItems = [
//     { name: 'Popcorn', price: 150 },
//     { name: 'Soda', price: 50 },
//     { name: 'Nachos', price: 200 },
//     { name: 'Hotdog', price: 100 }
//   ];

//   return (
//     <>
//       <Navbar/>
//       <div className="booking-summary-page">
//       {/* <div className="left"> */}
//       <div className="beverages">
//         <h3>Select Beverages and Food</h3>
//         <ul>
//           {foodItems.map((item, index) => (
//             <li key={index}>
//               <span>{item.name}</span>
//               <span>₹{item.price}</span>
//               <button>Add</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//       {/* </div> */}
//       {/* <div className="right"> */}
//       <div className="summary-details">
//         <h3>Booking Summary</h3>
//         <p>Selected Seats: {selectedSeats.join(', ')}</p>
//         <p>Total Price: ₹{totalPrice}</p>

//         <button className="btn">Proceed</button>
//       </div>
//       </div>
//     {/* </div> */}
//     </>
//   );
// };

// export default BookingSummary;













// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import './bookingsummary.css';
// import Navbar from '../navbar/Navbar';

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
//     { name: 'BBQ Grilled Chicken Burger', price: 230, calories: 489 ,imgSrc: '/food items/mountaindew.webp'},
//     { name: 'BBQ Hot Dog', price: 220, calories: 336, imgSrc: '/food items/popcornmedium.jpg'},
//     { name: 'Crispy Paneer Burger', price: 250, calories: 653 },
//     { name: 'Garden Fresh Veggies Pizza', price: 330, calories: 732 },
//     { name: 'Large Nachos Combo', price: 530, calories: 665 },
//     { name: 'Medium Popcorn Salted', price: 420, calories: 849 },
//     { name: 'Medium Popcorn Caramel', price: 470, calories: 826 },
//     { name: 'Margherita Pizza', price: 330, calories: 732 }
//   ];

//   const handleAddFood = (item) => {
//     setSelectedFood([...selectedFood, item]);
//   };

//   const getFoodTotal = () => {
//     return selectedFood.reduce((total, item) => total + item.price, 0);
//   };

//   const handleProceed = () => {
//     // Add your proceed logic here
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
//                 <img src={item.imgSrc} alt="" className = "food-image"/>
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
    { name: 'Crispy Paneer Burger', price: 250, calories: 653, imgSrc: '/food_items/crispy_paneer_burger.jpg' },
    { name: 'Garden Fresh Veggies Pizza', price: 330, calories: 732, imgSrc: '/food_items/garden_fresh_veggies_pizza.jpg' },
    { name: 'Large Nachos Combo', price: 530, calories: 665, imgSrc: '/food_items/large_nachos_combo.jpg' },
    { name: 'Medium Popcorn Salted', price: 420, calories: 849, imgSrc: '/food_items/medium_popcorn_salted.jpg' },
    { name: 'Medium Popcorn Caramel', price: 470, calories: 826, imgSrc: '/food_items/medium_popcorn_caramel.jpg' },
    { name: 'Margherita Pizza', price: 330, calories: 732, imgSrc: '/food_items/margherita_pizza.jpg' }
  ];

  const handleAddFood = (item) => {
    setSelectedFood([...selectedFood, item]);
  };

  const getFoodTotal = () => {
    return selectedFood.reduce((total, item) => total + item.price, 0);
  };

  const handleProceed = () => {
    // Add your proceed logic here
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
