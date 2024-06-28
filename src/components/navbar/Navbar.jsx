import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">Logo</div>
      <div className='search' >
        <input type="text" placeholder='Search movie' className="search-input" />
      </div>
      <ul className="nav-list">
        <li className="item">Booking</li>
        <li className="item"><Link to = "/login"style={{ textDecoration: "none",color: "white" }}>Login</Link></li>
        <li className="item"><Link to = "/signup"style={{ textDecoration: "none",color: "white" }}>Signup</Link></li>
      </ul>
    </div>
  )
}

export default Navbar