// // Login.jsx
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../firebaseConfig";
// import Navbar from '../navbar/Navbar';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import "./login.css";

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         setError('');
//         try {
//             await signInWithEmailAndPassword(auth, email, password);
//             toast.success('Successfully logged in!');
//             setTimeout(() => {
//                 navigate('/');
//             }, 700); // Adjust delay as needed
//         } catch (err) {
//             console.error('Error logging in:', err);
//             if (err.code === 'auth/user-not-found') {
//                 setError('No user found with this email.');
//             } else if (err.code === 'auth/wrong-password') {
//                 setError('Incorrect password.');
//             } else {
//                 setError('Incorrect email or password!');
//             }
//         }
//     };

//     return (
//         <>
//             <Navbar />
//             <div className='login'>
//                 <div className="left">
//                     <div className="title">
//                         <h1>Login to Your Account</h1>
//                     </div>
//                     <p className='desc'>Login using social networks</p>
//                     <div className="options">
//                         <div className="icons">
//                             <div className="icon">F</div> {/* Facebook icon */}
//                             <div className="icon">G</div> {/* Google+ icon */}
//                             <div className="icon">L</div> {/* LinkedIn icon */}
//                         </div>
//                     </div>
//                     <form className="login-form" onSubmit={handleLogin}>
//                         <input 
//                             type="email" 
//                             placeholder="Email" 
//                             value={email} 
//                             onChange={(e) => setEmail(e.target.value)} 
//                             required 
//                         />
//                         <input 
//                             type="password" 
//                             placeholder="Password" 
//                             value={password} 
//                             onChange={(e) => setPassword(e.target.value)} 
//                             required 
//                         />
//                         {error && <p className="error">{error}</p>}
//                         <button type="submit">Log in</button>
//                     </form>
//                 </div>
//                 <div className="right">
//                     <div className="title">
//                         <h1>New Here?</h1>
//                     </div>
//                     <p>Sign up and discover a great amount of new opportunities!</p>
//                     <button className="signup-btn"><Link to="/signup">Sign Up</Link></button>
//                 </div>
//             </div>
//             <ToastContainer />
//         </>
//     );
// };

// export default Login;



























import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import Navbar from '../navbar/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./login.css";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await signInWithEmailAndPassword(auth, email, password);
            toast.success('Successfully logged in!');
            setTimeout(() => {
                navigate('/');
            }, 700);
        } catch (err) {
            console.error('Error logging in:', err);
            if (err.code === 'auth/user-not-found') {
                setError('No user found with this email.');
            } else if (err.code === 'auth/wrong-password') {
                setError('Incorrect password.');
            } else {
                setError('Incorrect email or password!');
            }
        }
    };

    return (
        <>
            <Navbar />
            <div className='login'>
                <div className="left">
                    <div className="title">
                        <h1>Login to Your Account</h1>
                    </div>
                    <p className='desc'>Login using social networks</p>
                    <div className="options">
                        <div className="icons">
                            <div className="icon">F</div> {/* Facebook icon */}
                            <div className="icon">G</div> {/* Google+ icon */}
                            <div className="icon">L</div> {/* LinkedIn icon */}
                        </div>
                    </div>
                    <form className="login-form" onSubmit={handleLogin}>
                        <input 
                            type="email" 
                            placeholder="Email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                        {error && <p className="error">{error}</p>}
                        <button type="submit">Log in</button>
                    </form>
                </div>
                <div className="right">
                    <div className="title">
                        <h1>New Here?</h1>
                    </div>
                    <p>Sign up and discover a great amount of new opportunities!</p>
                    <button className="signup-btn"><Link to="/signup">Sign Up</Link></button>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default Login;
