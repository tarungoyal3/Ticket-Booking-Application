import React from 'react';
import './aboutus.css';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
const About = () => {
  return (
    <>
    <Navbar/>
    <div className="about-container">
      <div className="about-content">
        <div className="about-image">
          <img
            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
            alt="image"
          />
        </div>
        <div className="about-text">
          <h2 className="about-title">
          Welcome to our movie booking platform! Our mission is to make your movie-going experience seamless and enjoyable.
          </h2>
          <p className="about-description">
          We are a team of passionate movie enthusiasts dedicated to bringing you the latest and greatest in cinema.
          </p>
          <p className="about-description">
            To create a user-friendly platform that allows you to easily find and book tickets for your favorite movies.
            Whether you are a fan of action, drama, comedy, or animation, we have something for everyone.
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default About;
