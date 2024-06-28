// import React, { useState } from 'react';
// import './seatbooking.css';

// const rows = {
//     club: ['B', 'C', 'D', 'E', 'F', 'G', 'H'],
//     executive: ['I'],
// };

// const seatPrices = {
//     club: 180,
//     executive: 160,
// };

// const seats = {
//     club: 17,
//     executive: 15,
// };

// const SeatBooking = () => {
//     const [selectedSeats, setSelectedSeats] = useState([]);

//     const toggleSeatSelection = (seat, price) => {
//         setSelectedSeats((prevSelectedSeats) => {
//             const isSelected = prevSelectedSeats.some((selectedSeat) => selectedSeat.seat === seat);
//             if (isSelected) {
//                 return prevSelectedSeats.filter((selectedSeat) => selectedSeat.seat !== seat);
//             } else {
//                 return [...prevSelectedSeats, { seat, price }];
//             }
//         });
//     };

//     const renderSeats = (row, count, price) => {
//         let seatElements = [];
//         for (let i = 1; i <= count; i++) {
//             const seat = `${row}${i}`;
//             const isSelected = selectedSeats.some((selectedSeat) => selectedSeat.seat === seat);
//             const isSold = i > 9 && i < 14;
//             seatElements.push(
//                 <div
//                     className={`seat ${isSelected ? 'selected' : isSold ? 'sold' : 'available'}`}
//                     key={seat}
//                     onClick={() => !isSold && toggleSeatSelection(seat, price)}
//                 >
//                     {i}
//                 </div>
//             );
//         }
//         return seatElements;
//     };

//     const totalAmount = selectedSeats.reduce((total, seat) => total + seat.price, 0);

//     return (
//         <div className="seat-booking">
//             <div className="section club">
//                 <h2>Rs. 180 CLUB</h2>
//                 {rows.club.map((row) => (
//                     <div className="row" key={row}>
//                         {renderSeats(row, seats.club, seatPrices.club)}
//                     </div>
//                 ))}
//             </div>
//             <div className="section executive">
//                 <h2>Rs. 160 EXECUTIVE</h2>
//                 {rows.executive.map((row) => (
//                     <div className="row" key={row}>
//                         {renderSeats(row, seats.executive, seatPrices.executive)}
//                     </div>
//                 ))}
//             </div>
//             <div className="legend">
//                 <div className="legend-item">
//                     <div className="seat available"></div>
//                     <span>Available</span>
//                 </div>
//                 <div className="legend-item">
//                     <div className="seat selected"></div>
//                     <span>Selected</span>
//                 </div>
//                 <div className="legend-item">
//                     <div className="seat sold"></div>
//                     <span>Sold</span>
//                 </div>
//             </div>
//             <div className="total-amount">
//                 <h3>Total Amount: Rs. {totalAmount}</h3>
//                 <button className="pay-button" disabled={totalAmount === 0}>
//                     Pay Now
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default SeatBooking;


















// import React, { useState,useEffect } from 'react';
// import { db } from './firebase'; // Import Firestore instance
// import './seatbooking.css';
// import Footer from '../footer/Footer';

// const SeatBooking = () => {
//     const [selectedSeats, setSelectedSeats] = useState([]);
//     const [totalPrice, setTotalPrice] = useState(0);

//     const handleSeatClick = (seat, price) => {
//         if (selectedSeats.includes(seat)) {
//             setSelectedSeats(selectedSeats.filter(s => s !== seat));
//             setTotalPrice(totalPrice - price);
//         } else {
//             setSelectedSeats([...selectedSeats, seat]);
//             setTotalPrice(totalPrice + price);
//         }
//     };

//     const classicSeats = [
//         { row: 'A', number: 1, price: 170 },
//         { row: 'A', number: 2, price: 170 },
//         { row: 'A', number: 3, price: 170 },
//         { row: 'A', number: 4, price: 170 },
//         { row: 'A', number: 5, price: 170 },
//         { row: 'A', number: 6, price: 170 },
//         { row: 'A', number: 7, price: 170 },
//         { row: 'A', number: 8, price: 170 },
//         { row: 'A', number: 9, price: 170 },
//         { row: 'A', number: 10, price: 170 },

//         // Add more classic seats here
//         { row: 'B', number: 1, price: 170 },
//         { row: 'B', number: 2, price: 170 },
//         { row: 'B', number: 3, price: 170 },
//         { row: 'B', number: 4, price: 170 },
//         { row: 'B', number: 5, price: 170 },
//         { row: 'B', number: 6, price: 170 },
//         { row: 'B', number: 7, price: 170 },
//         { row: 'B', number: 8, price: 170 },
//         { row: 'B', number: 9, price: 170 },
//         { row: 'B', number: 10, price: 170 },
//         // Add more classic seats here

//         { row: 'C', number: 1, price: 170 },
//         { row: 'C', number: 2, price: 170 },
//         { row: 'C', number: 3, price: 170 },
//         { row: 'C', number: 4, price: 170 },
//         { row: 'C', number: 5, price: 170 },
//         { row: 'C', number: 6, price: 170 },
//         { row: 'C', number: 7, price: 170 },
//         { row: 'C', number: 8, price: 170 },
//         { row: 'C', number: 9, price: 170 },
//         { row: 'C', number: 10, price: 170 },
//     ];

//     const primeSeats = [
//         { row: 'E', number: 1, price: 210 },
//         { row: 'E', number: 2, price: 210 },
//         { row: 'E', number: 3, price: 210 },
//         { row: 'E', number: 4, price: 210 },
//         { row: 'E', number: 5, price: 210 },
//         { row: 'E', number: 6, price: 210 },
//         { row: 'E', number: 7, price: 210 },
//         { row: 'E', number: 8, price: 210 },
//         { row: 'E', number: 9, price: 210 },
//         { row: 'E', number: 10, price: 210 },
//         // Add more prime seats here
//         { row: 'F', number: 1, price: 210 },
//         { row: 'F', number: 2, price: 210 },
//         { row: 'F', number: 3, price: 210 },
//         { row: 'F', number: 4, price: 210 },
//         { row: 'F', number: 5, price: 210 },
//         { row: 'F', number: 6, price: 210 },
//         { row: 'F', number: 7, price: 210 },
//         { row: 'F', number: 8, price: 210 },
//         { row: 'F', number: 9, price: 210 },
//         { row: 'F', number: 10, price: 210 },
//         // Add more prime seats here
//         { row: 'G', number: 1, price: 210 },
//         { row: 'G', number: 2, price: 210 },
//         { row: 'G', number: 3, price: 210 },
//         { row: 'G', number: 4, price: 210 },
//         { row: 'G', number: 5, price: 210 },
//         { row: 'G', number: 6, price: 210 },
//         { row: 'G', number: 7, price: 210 },
//         { row: 'G', number: 8, price: 210 },
//         { row: 'G', number: 9, price: 210 },
//         { row: 'G', number: 10, price: 210 },

//         { row: 'H', number: 1, price: 210 },
//         { row: 'H', number: 2, price: 210 },
//         { row: 'H', number: 3, price: 210 },
//         { row: 'H', number: 4, price: 210 },
//         { row: 'H', number: 5, price: 210 },
//         { row: 'H', number: 6, price: 210 },
//         { row: 'H', number: 7, price: 210 },
//         { row: 'H', number: 8, price: 210 },
//         { row: 'H', number: 9, price: 210 },
//         { row: 'H', number: 10, price: 210 },

//         { row: 'J', number: 1, price: 210 },
//         { row: 'J', number: 2, price: 210 },
//         { row: 'J', number: 3, price: 210 },
//         { row: 'J', number: 4, price: 210 },
//         { row: 'J', number: 5, price: 210 },
//         { row: 'J', number: 6, price: 210 },
//         { row: 'J', number: 7, price: 210 },
//         { row: 'J', number: 8, price: 210 },
//         { row: 'J', number: 9, price: 210 },
//         { row: 'J', number: 10, price: 210 },

//         { row: 'K', number: 1, price: 210 },
//         { row: 'K', number: 2, price: 210 },
//         { row: 'K', number: 3, price: 210 },
//         { row: 'K', number: 4, price: 210 },
//         { row: 'K', number: 5, price: 210 },
//         { row: 'K', number: 6, price: 210 },
//         { row: 'K', number: 7, price: 210 },
//         { row: 'K', number: 8, price: 210 },
//         { row: 'K', number: 9, price: 210 },
//         { row: 'K', number: 10, price: 210 },
//     ];

//     const classicRows = ['A', 'B', 'C'];
//     const primeRows = ['E', 'F', 'G', 'H', 'J', 'K'];

//     const renderSeats = (seats, row) => {
//         return seats
//             .filter(seat => seat.row === row)
//             .map(seat => (
//                 <div
//                     key={`${seat.row}${seat.number}`}
//                     className={`seat ${selectedSeats.includes(`${seat.row}${seat.number}`) ? 'selected' : ''}`}
//                     onClick={() => handleSeatClick(`${seat.row}${seat.number}`, seat.price)}
//                 >
//                     {seat.number}
//                 </div>
//             ));
//     };

//     return (
//         <div className="seat-booking">
//             <div className="header">
//                 <h2>Select Your Seats</h2>
//             </div>
//             <div className="screen">SCREEN</div>
//             <div className="seats-container">
//                 <h3>CLASSIC (₹170.00)</h3>
//                 {classicRows.map(row => (
//                     <div className="seat-row" key={row}>
//                         <div className="row-label">{row}</div>
//                         <div className="seats">{renderSeats(classicSeats, row)}</div>
//                     </div>
//                 ))}
//                 <h3>PRIME (₹210.00)</h3>
//                 {primeRows.map(row => (
//                     <div className="seat-row" key={row}>
//                         <div className="row-label">{row}</div>
//                         <div className="seats">{renderSeats(primeSeats, row)}</div>
//                     </div>
//                 ))}
//             </div>
//             <div className="booking-summary">
//                 <h3>Booking Summary</h3>
//                 <p>Selected Seats: {selectedSeats.join(', ')}</p>
//                 <p>Total Price: ₹{totalPrice}</p>
//                 <button className="proceed-btn">Proceed</button>
//             </div>
//             <Footer/>
//         </div>
//     );
// };

// export default SeatBooking;

















// import React, { useState, useEffect } from 'react';
// // import { db } from './firebase'; // Adjust the import path as necessary
// import { db } from '../../firebase';
// import { collection, getDocs, addDoc, updateDoc, doc } from 'firebase/firestore';
// import './seatbooking.css';
// import Footer from '../footer/Footer';

// const SeatBooking = () => {
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [seats, setSeats] = useState([]);

//   useEffect(() => {
//     const fetchSeats = async () => {
//       const querySnapshot = await getDocs(collection(db, 'shows/yourShowId/seats'));
//       const seatsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//       setSeats(seatsData);
//     };
//     fetchSeats();
//   }, []);

//   const handleSeatClick = async (seat, price) => {
//     if (selectedSeats.includes(seat)) {
//       setSelectedSeats(selectedSeats.filter(s => s !== seat));
//       setTotalPrice(totalPrice - price);
//     } else {
//       setSelectedSeats([...selectedSeats, seat]);
//       setTotalPrice(totalPrice + price);
//     }
//   };

//   const handleProceed = async () => {
//     // Handle checkout and block seats
//     for (const seat of selectedSeats) {
//       const seatRef = doc(db, 'shows/yourShowId/seats', seat);
//       await updateDoc(seatRef, { isAvailable: false });
//     }
//     // Proceed with further actions like generating a receipt
//   };

//   const renderSeats = (seats, row) => {
//     return seats
//       .filter(seat => seat.row === row)
//       .map(seat => (
//         <div
//           key={`${seat.row}${seat.number}`}
//           className={`seat ${selectedSeats.includes(`${seat.row}${seat.number}`) ? 'selected' : ''} ${seat.isAvailable === false ? 'unavailable' : ''}`}
//           onClick={() => handleSeatClick(`${seat.row}${seat.number}`, seat.price)}
//         >
//           {seat.number}
//         </div>
//       ));
//   };

//   const classicRows = ['A', 'B', 'C'];
//   const primeRows = ['E', 'F', 'G', 'H', 'J', 'K'];

//   return (
//     <div className="seat-booking">
//       <div className="header">
//         <h2>Select Your Seats</h2>
//       </div>
//       <div className="screen">SCREEN</div>
//       <div className="seats-container">
//         <h3>CLASSIC (₹170.00)</h3>
//         {classicRows.map(row => (
//           <div className="seat-row" key={row}>
//             <div className="row-label">{row}</div>
//             <div className="seats">{renderSeats(seats, row)}</div>
//           </div>
//         ))}
//         <h3>PRIME (₹210.00)</h3>
//         {primeRows.map(row => (
//           <div className="seat-row" key={row}>
//             <div className="row-label">{row}</div>
//             <div className="seats">{renderSeats(seats, row)}</div>
//           </div>
//         ))}
//       </div>
//       <div className="booking-summary">
//         <h3>Booking Summary</h3>
//         <p>Selected Seats: {selectedSeats.join(', ')}</p>
//         <p>Total Price: ₹{totalPrice}</p>
//         <button className="proceed-btn" onClick={handleProceed}>Proceed</button>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default SeatBooking;









// import React, { useState, useEffect } from 'react';
// import { db } from '../../firebase';
// import { collection, getDocs, addDoc, updateDoc, doc } from 'firebase/firestore';
// import './seatbooking.css';
// import Footer from '../footer/Footer';
// import Navbar from '../navbar/Navbar'

// const SeatBooking = () => {
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [seats, setSeats] = useState([]);

//   useEffect(() => {
//     const fetchSeats = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, 'shows/show1/seats'));
//         const seatsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//         console.log('Fetched seats:', seatsData);
//         setSeats(seatsData);
//       } catch (error) {
//         console.error('Error fetching seats:', error);
//       }
//     };
//     fetchSeats();
//   }, []);

//   const handleSeatClick = async (seatId, seat, price) => {
//     if (selectedSeats.includes(seatId)) {
//       setSelectedSeats(selectedSeats.filter(s => s !== seatId));
//       setTotalPrice(totalPrice - price);
//     } else {
//       setSelectedSeats([...selectedSeats, seatId]);
//       setTotalPrice(totalPrice + price);
//     }
//   };

//   const handleProceed = async () => {
//     for (const seatId of selectedSeats) {
//       const seatRef = doc(db, 'shows/show1/seats', seatId);
//       await updateDoc(seatRef, { status: 'unavailable' });
//     }
//   };

//   const renderSeats = (seats, row) => {
//     // Filter and sort seats for the current row
//     const rowSeats = seats
//       .filter(seat => seat.row === row)
//       .sort((a, b) => a.number - b.number);

//     return rowSeats.map(seat => (
//       <div
//         key={seat.id}
//         className={`seat ${selectedSeats.includes(seat.id) ? 'selected' : ''} ${seat.status === 'unavailable' ? 'unavailable' : ''}`}
//         onClick={() => handleSeatClick(seat.id, `${seat.row}${seat.number}`, seat.price)}
//       >
//         {seat.number}
//       </div>
//     ));
//   };

//   const classicRows = ['A', 'B', 'C'];
//   const primeRows = ['E', 'F', 'G', 'H', 'J', 'K'];

//   const getSelectedSeatNames = () => {
//     return seats
//       .filter(seat => selectedSeats.includes(seat.id))
//       .map(seat => `${seat.row}${seat.number}`)
//       .join(', ');
//   };

//   return (
//     <div className="seat-booking">
//       <Navbar/>
//       <div className="header">
//         <h2>Select Your Seats</h2>
//       </div>
//       <div className="screen">SCREEN</div>
//       <div className="seats-container">
//         <h3>CLASSIC (₹170.00)</h3>
//         {classicRows.map(row => (
//           <div className="seat-row" key={row}>
//             <div className="row-label">{row}</div>
//             <div className="seats">{renderSeats(seats, row)}</div>
//           </div>
//         ))}
//         <h3>PRIME (₹210.00)</h3>
//         {primeRows.map(row => (
//           <div className="seat-row" key={row}>
//             <div className="row-label">{row}</div>
//             <div className="seats">{renderSeats(seats, row)}</div>
//           </div>
//         ))}
//       </div>
//       <div className="booking-summary">
//         <h3>Booking Summary</h3>
//         <p>Selected Seats: {getSelectedSeatNames()}</p>
//         <p>Total Price: ₹{totalPrice}</p>
//         <button className="proceed-btn" onClick={handleProceed}>Proceed</button>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default SeatBooking;
















// import React, { useState, useEffect } from 'react';
// import { db } from '../../firebase';
// import { collection, getDocs, addDoc, updateDoc, doc } from 'firebase/firestore';
// import './seatbooking.css';
// import Footer from '../footer/Footer';

// const SeatBooking = () => {
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [seats, setSeats] = useState([]);

//   useEffect(() => {
//     const fetchSeats = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, 'shows/show1/seats'));
//         const seatsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//         console.log('Fetched seats:', seatsData);
//         setSeats(seatsData);
//       } catch (error) {
//         console.error('Error fetching seats:', error);
//       }
//     };
//     fetchSeats();
//   }, []);

//   const handleSeatClick = async (seatId, seat, price) => {
//     if (selectedSeats.includes(seatId)) {
//       setSelectedSeats(selectedSeats.filter(s => s !== seatId));
//       setTotalPrice(totalPrice - price);
//     } else {
//       setSelectedSeats([...selectedSeats, seatId]);
//       setTotalPrice(totalPrice + price);
//     }
//   };

//   const handleProceed = async () => {
//     for (const seatId of selectedSeats) {
//       const seatRef = doc(db, 'shows/show1/seats', seatId);
//       await updateDoc(seatRef, { status: 'unavailable' });
//     }
//   };

//   const renderSeats = (seats, row) => {
//     // Filter and sort seats for the current row
//     const rowSeats = seats
//       .filter(seat => seat.row === row)
//       .sort((a, b) => a.number - b.number);

//     return rowSeats.map(seat => (
//       <div
//         key={seat.id}
//         className={`seat ${selectedSeats.includes(seat.id) ? 'selected' : ''} ${seat.status === 'unavailable' ? 'unavailable' : ''}`}
//         onClick={() => handleSeatClick(seat.id, `${seat.row}${seat.number}`, seat.price)}
//       >
//         {seat.number}
//       </div>
//     ));
//   };

//   const classicRows = ['A', 'B', 'C'];
//   const primeRows = ['E', 'F', 'G', 'H', 'J', 'K'];

//   const getSelectedSeatNames = () => {
//     return seats
//       .filter(seat => selectedSeats.includes(seat.id))
//       .map(seat => `${seat.row}${seat.number}`)
//       .join(', ');
//   };

//   return (
//     <div className="seat-booking">
//       <div className="header">
//         <h2>Select Your Seats</h2>
//       </div>
//       <div className="screen">SCREEN</div>
//       <div className="seats-container">
//         <h3>CLASSIC (₹170.00)</h3>
//         {classicRows.map(row => (
//           <div className="seat-row" key={row}>
//             <div className="row-label">{row}</div>
//             <div className="seats">{renderSeats(seats, row)}</div>
//           </div>
//         ))}
//         <h3>PRIME (₹210.00)</h3>
//         {primeRows.map(row => (
//           <div className="seat-row" key={row}>
//             <div className="row-label">{row}</div>
//             <div className="seats">{renderSeats(seats, row)}</div>
//           </div>
//         ))}
//       </div>
//       <div className="booking-summary">
//         <h3>Booking Summary</h3>
//         <p>Selected Seats: {getSelectedSeatNames()}</p>
//         <p>Total Price: ₹{totalPrice}</p>
//         <button className="proceed-btn" onClick={handleProceed}>Proceed</button>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default SeatBooking;














// import React, { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { db } from '../../firebase';
// import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
// import './seatbooking.css';
// import Footer from '../footer/Footer';

// const SeatBooking = () => {
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [seats, setSeats] = useState([]);
//   const navigate = useNavigate();
//   const { title } = useParams();

//   useEffect(() => {
//     const fetchSeats = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, 'shows/show1/seats'));
//         const seatsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//         console.log('Fetched seats:', seatsData);
//         setSeats(seatsData);
//       } catch (error) {
//         console.error('Error fetching seats:', error);
//       }
//     };
//     fetchSeats();
//   }, []);

//   const handleSeatClick = async (seatId, seat, price) => {
//     if (selectedSeats.includes(seatId)) {
//       setSelectedSeats(selectedSeats.filter(s => s !== seatId));
//       setTotalPrice(totalPrice - price);
//     } else {
//       setSelectedSeats([...selectedSeats, seatId]);
//       setTotalPrice(totalPrice + price);
//     }
//   };

//   const handleProceed = async () => {
//     for (const seatId of selectedSeats) {
//       const seatRef = doc(db, 'shows/show1/seats', seatId);
//       await updateDoc(seatRef, { status: 'unavailable' });
//     }
//     navigate(`/booking/${title}/summary`, { state: { selectedSeats, totalPrice } });
//   };

//   const renderSeats = (seats, row) => {
//     // Filter and sort seats for the current row
//     const rowSeats = seats
//       .filter(seat => seat.row === row)
//       .sort((a, b) => a.number - b.number);

//     return rowSeats.map(seat => (
//       <div
//         key={seat.id}
//         className={`seat ${selectedSeats.includes(seat.id) ? 'selected' : ''} ${seat.status === 'unavailable' ? 'unavailable' : ''}`}
//         onClick={() => handleSeatClick(seat.id, `${seat.row}${seat.number}`, seat.price)}
//       >
//         {seat.number}
//       </div>
//     ));
//   };

//   const classicRows = ['A', 'B', 'C'];
//   const primeRows = ['E', 'F', 'G', 'H', 'J', 'K'];

//   const getSelectedSeatNames = () => {
//     return seats
//       .filter(seat => selectedSeats.includes(seat.id))
//       .map(seat => `${seat.row}${seat.number}`)
//       .join(', ');
//   };

//   return (
//     <div className="seat-booking">
//       <div className="header">
//         <h2>Select Your Seats</h2>
//       </div>
//       <div className="screen">SCREEN</div>
//       <div className="seats-container">
//         <h3>CLASSIC (₹170.00)</h3>
//         {classicRows.map(row => (
//           <div className="seat-row" key={row}>
//             <div className="row-label">{row}</div>
//             <div className="seats">{renderSeats(seats, row)}</div>
//           </div>
//         ))}
//         <h3>PRIME (₹210.00)</h3>
//         {primeRows.map(row => (
//           <div className="seat-row" key={row}>
//             <div className="row-label">{row}</div>
//             <div className="seats">{renderSeats(seats, row)}</div>
//           </div>
//         ))}
//       </div>
//       <div className="booking-summary">
//         <h3>Booking Summary</h3>
//         <p>Selected Seats: {getSelectedSeatNames()}</p>
//         <p>Total Price: ₹{totalPrice}</p>
//         <button className="proceed-btn" onClick={handleProceed}>Proceed</button>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default SeatBooking;







import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { db } from '../../firebase';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import './seatbooking.css';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';

const SeatBooking = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [seats, setSeats] = useState([]);
  const navigate = useNavigate();
  const { title } = useParams();

  useEffect(() => {
    const fetchSeats = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'shows/show1/seats'));
        const seatsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log('Fetched seats:', seatsData);
        setSeats(seatsData);
      } catch (error) {
        console.error('Error fetching seats:', error);
      }
    };
    fetchSeats();
  }, []);

  const handleSeatClick = async (seatId, seat, price) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seatId));
      setTotalPrice(totalPrice - price);
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
      setTotalPrice(totalPrice + price);
    }
  };

  const handleProceed = async () => {
    for (const seatId of selectedSeats) {
      const seatRef = doc(db, 'shows/show1/seats', seatId);
      await updateDoc(seatRef, { status: 'unavailable' });
    }

    const selectedSeatNames = seats
      .filter(seat => selectedSeats.includes(seat.id))
      .map(seat => `${seat.row}${seat.number}`);

    navigate(`/booking/${title}/summary`, { state: { selectedSeats: selectedSeatNames, totalPrice } });
  };

  const renderSeats = (seats, row) => {
    // Filter and sort seats for the current row
    const rowSeats = seats
      .filter(seat => seat.row === row)
      .sort((a, b) => a.number - b.number);

    return rowSeats.map(seat => (
      <div
        key={seat.id}
        className={`seat ${selectedSeats.includes(seat.id) ? 'selected' : ''} ${seat.status === 'unavailable' ? 'unavailable' : ''}`}
        onClick={() => handleSeatClick(seat.id, `${seat.row}${seat.number}`, seat.price)}
      >
        {seat.number}
      </div>
    ));
  };

  const classicRows = ['A', 'B', 'C'];
  const primeRows = ['E', 'F', 'G', 'H', 'J', 'K'];

  const getSelectedSeatNames = () => {
    return seats
      .filter(seat => selectedSeats.includes(seat.id))
      .map(seat => `${seat.row}${seat.number}`)
      .join(', ');
  };

  return (
    <div className="seat-booking">
      <Navbar/>
      <div className="header">
        <h2>Select Your Seats</h2>
      </div>
      <div className="screen">SCREEN</div>
      <div className="seats-container">
        <h3>CLASSIC (₹170.00)</h3>
        {classicRows.map(row => (
          <div className="seat-row" key={row}>
            <div className="row-label">{row}</div>
            <div className="seats">{renderSeats(seats, row)}</div>
          </div>
        ))}
        <h3>PRIME (₹210.00)</h3>
        {primeRows.map(row => (
          <div className="seat-row" key={row}>
            <div className="row-label">{row}</div>
            <div className="seats">{renderSeats(seats, row)}</div>
          </div>
        ))}
      </div>
      <div className="booking-summary">
        <h3>Booking Summary</h3>
        <p>Selected Seats: {getSelectedSeatNames()}</p>
        <p>Total Price: ₹{totalPrice}</p>
        <button className="proceed-btn" onClick={handleProceed}>Proceed</button>
      </div>
      <Footer />
    </div>
  );
};

export default SeatBooking;
