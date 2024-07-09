import React from 'react'
import "./home.css"
import Navbar from '../navbar/Navbar'
import Featured from '../featured/Featured';
import Footer from '../footer/Footer';

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
      <Featured/>
      <Footer/>
    </div>
  )
}

export default Home