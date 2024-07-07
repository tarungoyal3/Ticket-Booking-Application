import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import Moviedetail from './components/moviedetail/Moviedetail';
import SeatBooking from './components/seatbooking/SeatBooking';
import BookingSummary from './components/bookingsummary/BookingSummary';
import AboutUs from './components/About/AboutUs';
import ContactUs from './components/contact/ContactUs';
import PricingPolicy from './policies/PricingPolicy';
import PrivacyPolicy from './policies/PrivacyPolicy';
import RefundsCancellation from './policies/RefundsCancellation';
import ShippingPolicy from './policies/ShippingPolicy';
import TermsAndConditions from './policies/TermsAndConditions';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='signup' element={<Signup />} />
            <Route path='login' element={<Login />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions/>} />
            <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
            <Route path="/refunds-cancellation" element={<RefundsCancellation/>} />
            <Route path="/pricing-policy" element={<PricingPolicy/>} />
            <Route path="/shipping-policy" element={<ShippingPolicy/>} />
            <Route path="movie/:title" element={<Moviedetail />} />
            <Route path="/booking/:title" element={<SeatBooking />} />
            <Route path="/booking/:title/summary" element={<BookingSummary />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
