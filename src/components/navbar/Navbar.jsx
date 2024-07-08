
// Navbar.jsx
import React from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import { auth } from '../../firebaseConfig';
const Navbar = () => {
    const { currentUser } = useAuth();

    return (
        <div className='navbar'>
            <div className="logo">Logo</div>
            <div className='search'>
                <input type="text" placeholder='Search movie' className="search-input" />
            </div>
            <ul className="nav-list">
                <li className="item"><Link to="/about-us" style={{ textDecoration: "none", color: "white" }}>About Us</Link></li>
                <li className="item"><Link to="/contact-us" style={{ textDecoration: "none", color: "white" }}>Contact Us</Link></li>
                {currentUser ? (
                    <li className="item profile-dropdown">
                        <div className="profile-icon">Profile</div>
                        <ul className="dropdown-menu">
                            <li onClick={() => auth.signOut()}>Logout</li>
                            {/* Add other dropdown items here */}
                        </ul>
                    </li>
                ) : (
                    <>
                        <li className="item"><Link to="/login" style={{ textDecoration: "none", color: "white" }}>Login</Link></li>
                        <li className="item"><Link to="/signup" style={{ textDecoration: "none", color: "white" }}>Signup</Link></li>
                    </>
                )}
            </ul>
        </div>
    );
}

export default Navbar;
