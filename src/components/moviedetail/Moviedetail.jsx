import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './moviedetail.css';
import Navbar from '../navbar/Navbar';
import { Navigate } from 'react-router-dom';
import Footer from '../footer/Footer';

const movies = [
    {
        title: "Chandu Champion",
        genre: " Biography Drama Sports",
        rating: "9.2/10",
        votes: "11.1k Votes",
        adult: " UA ",
        date: " 14 June 2024 ",
        dimension: "2D",
        language: "Hindi",
        duration: "2h 23min ",
        likes: "65K Likes",
        imgSrc: "/chandu.jpeg",
        promoted: true,
    },
        {
        title: "Munjiya",
        genre: "Comedy Horror",
        rating: "8.2/10",
        language: "Hindi",
        duration: "2h 23min ",
        adult: " UA ",
        dimension: "2D",
        votes: "21.3K Votes",
        imgSrc: "/interstellar.jpeg",
    },
    {
        title: "Mr. & Mrs. Mahi",
        genre: "Drama Romantic Sports",
        rating: "7.1/10",
        adult: " UA ",
        duration: "2h 23min ",
        language: "Hindi",
        dimension: "2D",
        votes: "24.4K Votes",
        imgSrc: "/hangover.jpeg",
    },
    {
        title: "Bad Boys: Ride or Die",
        genre: "Action Adventure Comedy",
        rating: "8.7/10",
        language: "Hindi",
        duration: "2h 23min ",
        adult: " UA ",
        dimension: "2D",
        votes: "14.7K Votes",
        imgSrc: "/inception.jpeg",
    },
    {
        title: "Inside Out 2",
        genre: "Animation Comedy Drama",
        adult: " UA ",
        likes: "29.5K Likes",
        rating: "8.7/10",
        language: "Hindi",
        votes: "14.7K Votes",
        duration: "2h 23min ",
        dimension: "2D",
        imgSrc: "/kaipoche.jpeg",
    }
];






const Moviedetail = () => {
    const { title } = useParams();
    const navigate = useNavigate();
    const movie = movies.find(movie => movie.title === title);

    if (!movie) {
        return <h2>Movie not found</h2>;
    }

    const handleBookTickets = () => {
        navigate(`/booking/${title}`);
    };

    return (
        <div className="movie-detail">
            <Navbar />
            <div className="detail">
                <img src={movie.imgSrc} alt={movie.title} className='poster' />
                <div className="info">
                    <h2>{movie.title}</h2>
                    <div className="voting">
                        <span className="rating">{movie.rating}</span> 
                        <span className="votes">({movie.votes})</span>
                        <span className="rate-now">Rate now</span>
                    </div>
                    <div className="more-info">
                        <div className="dimension">{movie.dimension}</div>
                        <div className="language">{movie.language}</div>
                    </div>
                    <div className="duration">
                        <span>{movie.duration}</span>
                        <span>{movie.genre}</span>
                        <span>{movie.adult}</span>
                        <span>{movie.date}</span>
                    </div>
                    <div className="book-tickets" onClick={handleBookTickets}>Book Tickets</div>
                </div>
            </div>
            <Footer/>
        </div>
        
    );
};

export default Moviedetail;