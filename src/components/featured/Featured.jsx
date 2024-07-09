import React from 'react';
import { useNavigate } from 'react-router-dom';
import './featured.css';

const movies = [
    {
        title: "Chandu Champion",
        genre: "Biography/Drama/Sports",
        likes: "65K Likes",
        imgSrc: "/Movies/chandu.jpeg",
        promoted: true,
    },
    {
        title: "Munjiya",
        genre: "Comedy/Horror",
        rating: "8.2/10",
        votes: "21.3K Votes",
        imgSrc: "/Movies/munjya.avif",
    },
    {
        title: "Mr. & Mrs. Mahi",
        genre: "Drama/Romantic/Sports",
        rating: "7.1/10",
        votes: "24.4K Votes",
        imgSrc: "/Movies/Mahi.jpg",
    },
    {
        title: "Jatt & Juliet 3",
        genre: "Action/Adventure/Comedy",
        rating: "8.7/10",
        votes: "14.7K Votes",
        imgSrc: "/Movies/jatt.jpg",
    },
    {
        title: "Inside Out 2",
        genre: "Animation/Comedy/Drama",
        likes: "29.5K Likes",
        imgSrc: "/Movies/inside-out2.jpg",
    }
];

const Featured = () => {
    const navigate = useNavigate();

    const handleCardClick = (title) => {
        navigate(`movie/${title}`);
    };

    return (
        <div className="featured">
            <h2>Now Showing</h2>
            <div className="movies-list">
                {movies.map((movie, index) => (
                    <div className="movie-card" key={index} onClick={() => handleCardClick(movie.title)}>
                        <img src={movie.imgSrc} alt={movie.title} className="movie-poster" />
                        {movie.promoted && <div className="promoted-badge">PROMOTED</div>}
                        <div className="movie-info">
                            <h3>{movie.title}</h3>
                            <p>{movie.genre}</p>
                            {movie.likes && <p className="likes">{movie.likes}</p>}
                            {movie.rating && <p className="rating">{movie.rating} <span>{movie.votes}</span></p>}
                        </div>
                    </div>
                ))}
            </div>
            <a href="#" className="see-all">See All</a>
        </div>
    );
};

export default Featured;
