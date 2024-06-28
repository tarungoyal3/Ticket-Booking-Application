// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQmLd4NHOPNvbxXWpBvzxGW9vudqiNofQ",
  authDomain: "ticket-booking-applicati-5b2bd.firebaseapp.com",
  projectId: "ticket-booking-applicati-5b2bd",
  storageBucket: "ticket-booking-applicati-5b2bd.appspot.com",
  messagingSenderId: "728926662108",
  appId: "1:728926662108:web:a08c6c09989b9911d0b319",
  measurementId: "G-RER4EMRCV0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export {auth,db};

// export const database = getAuth(app)