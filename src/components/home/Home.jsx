import React from 'react'
import "./home.css"
import Navbar from '../navbar/Navbar'
import Featured from '../featured/Featured';
import Footer from '../footer/Footer';


// const shows = [
//   { id: 1, title: "Movie 1", description: "This is the first movie." },
//   { id: 2, title: "Movie 2", description: "This is the second movie." },
//   { id: 3, title: "Movie 3", description: "This is the third movie." },
//   { id: 4, title: "Movie 4", description: "This is the fourth movie." },
//   { id: 5, title: "Movie 5", description: "This is the fifth movie." },
// ];

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