import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import Moviedetail from './components/moviedetail/Moviedetail';
import SeatBooking from './components/seatbooking/SeatBooking';
import BookingSummary from './components/bookingsummary/BookingSummary';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element = {<Home/>}/>
            <Route path='signup' element = {<Signup/>}/>
            <Route path='login' element = {<Login/>}/>
            <Route path="movie/:title" element={<Moviedetail/>} />
            <Route path="/booking/:title" element={<SeatBooking/>} />
            <Route path="/booking/:title/summary" element={<BookingSummary/>} />
          </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
