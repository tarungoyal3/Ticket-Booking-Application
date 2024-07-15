import React from 'react';
import "./navbar.css";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import { auth } from '../../firebaseConfig';

const Navbar = () => {
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await auth.signOut();
            navigate('/login');
        } catch (error) {
            console.error("Error logging out: ", error);
        }
    };

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
                            <li className="dropdown-item"><Link to="/transactions" style={{ textDecoration: "none", color: "black" }}>Transactions</Link></li>
                            <li className="dropdown-item" onClick={handleLogout}>Logout</li>
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
