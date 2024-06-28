// import React from 'react';
// import "./signup.css";
// import { Link } from 'react-router-dom';
// import Navbar from '../navbar/Navbar';
// import { auth , db } from '../../firebaseConfig';
// import { useState } from 'react';
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { doc, setDoc } from "firebase/firestore";
// const Signup = () => {
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');

//     const handleSignup = async (e) => {
//         e.preventDefault();
//         try {
//             // await createUserWithEmailAndPassword(auth, email, password);
//             const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//             const user = userCredential.user;

//             await setDoc(doc(db, "users", user.uid), {
//                 username: username,
//                 email: email,
//             });
//             // Redirect or show success message
//         } catch (err) {
//             setError(err.message);
//         }
//     };
//     return (
//       <>
//       <Navbar/>
//         <div className='signup'>
//             <div className="left">
//                 <div className="title">
//                     <h1>Create Your Account</h1>
//                 </div>
//                 <p className='desc'>Signup using social networks</p>
//                 <div className="options">
//                     <div className="icons">
//                         <div className="icon">F</div> {/* Facebook icon */}
//                         <div className="icon">G</div> {/* Google+ icon */}
//                         <div className="icon">L</div> {/* LinkedIn icon */}
//                     </div>
//                 </div>
//                 <form className="signup-form" onSubmit={handleSignup}>
//                     <input type="text" placeholder="Username"value={username} onChange={(e) => setUsername(e.target.value)} 
//                             required />
//                     <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} 
//                             required />
//                     <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} 
//                             required  />
//                             {error && <p className="error">{error}</p>}
//                     <button type="submit">Sign Up</button>
//                 </form>
//             </div>
//             <div className="right">
//                 <div className="title">
//                     <h1>Already a member?</h1>
//                 </div>
//                 <p>Login and discover a great amount of new opportunities!</p>
//                 <button className="login-btn"><Link to = "/login">Login</Link></button>
//             </div>
//         </div>
//         </>
//     );
// }

// export default Signup;






// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { doc, setDoc } from "firebase/firestore";
// import { auth, db } from "../../firebaseConfig";
// import Navbar from '../navbar/Navbar';
// import "./signup.css";

// const Signup = () => {
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const [success, setSuccess] = useState('');
//     const navigate = useNavigate();

//     const handleSignup = async (e) => {
//         e.preventDefault();
//         setError('');
//         setSuccess('');
//         try {
//             const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//             const user = userCredential.user;

//             // Store the username in Firestore
//             await setDoc(doc(db, "users", user.uid), {
//                 username: username,
//                 email: email,
//                 uid: user.uid,
//             });

//             // Display success message
//             setSuccess('Successfully signed up!');
//             // Clear the form fields
//             setUsername('');
//             setEmail('');
//             setPassword('');

//             // Redirect to home page after a short delay
//             setTimeout(() => {
//                 navigate('/');
//             }, 1000); // Adjust delay as needed
//         } catch (err) {
//             console.error('Error signing up:', err);
//             if (err.code === 'auth/email-already-in-use') {
//                 setError('This email is already in use.');
//             } else if (err.code === 'auth/invalid-email') {
//                 setError('This email is invalid.');
//             } else if (err.code === 'auth/weak-password') {
//                 setError('The password is too weak.');
//             } else {
//                 setError('An unknown error occurred. Please try again.');
//             }
//         }
//     };

//     return (
//         <>
//             <Navbar />
//             <div className='signup'>
//                 <div className="left">
//                     <div className="title">
//                         <h1>Create Your Account</h1>
//                     </div>
//                     <p className='desc'>Signup using social networks</p>
//                     <div className="options">
//                         <div className="icons">
//                             <div className="icon">F</div> {/* Facebook icon */}
//                             <div className="icon">G</div> {/* Google+ icon */}
//                             <div className="icon">L</div> {/* LinkedIn icon */}
//                         </div>
//                     </div>
//                     <form className="signup-form" onSubmit={handleSignup}>
//                         <input 
//                             type="text" 
//                             placeholder="Username" 
//                             value={username} 
//                             onChange={(e) => setUsername(e.target.value)} 
//                             required 
//                         />
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
//                         {success && <p className="success">{success}</p>}
//                         <button type="submit">Sign Up</button>
//                     </form>
//                 </div>
//                 <div className="right">
//                     <div className="title">
//                         <h1>Already a member?</h1>
//                     </div>
//                     <p>Login and discover a great amount of new opportunities!</p>
//                     <button className="login-btn"><Link to="/login">Login</Link></button>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Signup;









import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";
import Navbar from '../navbar/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./signup.css";

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Store the username in Firestore
            await setDoc(doc(db, "users", user.uid), {
                username: username,
                email: email,
                uid: user.uid,
            });

            // Display success message
            toast.success(`Successfully signed up! Welcome, ${username}`);
            // Clear the form fields
            setUsername('');
            setEmail('');
            setPassword('');

            // Redirect to home page after a short delay
            setTimeout(() => {
                navigate('/');
            }, 2000); // Adjust delay as needed
        } catch (err) {
            console.error('Error signing up:', err);
            if (err.code === 'auth/email-already-in-use') {
                setError('This email is already in use.');
            } else if (err.code === 'auth/invalid-email') {
                setError('This email is invalid.');
            } else if (err.code === 'auth/weak-password') {
                setError('The password is too weak.');
            } else {
                setError('An unknown error occurred. Please try again.');
            }
        }
    };

    return (
        <>
            <Navbar />
            <div className='signup'>
                <div className="left">
                    <div className="title">
                        <h1>Create Your Account</h1>
                    </div>
                    <p className='desc'>Signup using social networks</p>
                    <div className="options">
                        <div className="icons">
                            <div className="icon">F</div> {/* Facebook icon */}
                            <div className="icon">G</div> {/* Google+ icon */}
                            <div className="icon">L</div> {/* LinkedIn icon */}
                        </div>
                    </div>
                    <form className="signup-form" onSubmit={handleSignup}>
                        <input 
                            type="text" 
                            placeholder="Username" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            required 
                        />
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
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
                <div className="right">
                    <div className="title">
                        <h1>Already a member?</h1>
                    </div>
                    <p>Login and discover a great amount of new opportunities!</p>
                    <button className="login-btn"><Link to="/login">Login</Link></button>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default Signup;


