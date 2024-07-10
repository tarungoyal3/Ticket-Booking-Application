import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './moviedetail.css';
import Navbar from '../navbar/Navbar';
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
        imgSrc: "/Movies/chandu.jpeg",
        desc: "This is an unbelievable tale of a man who faced one adversary after another with an undying spirit. His unwavering zeal and never-give-up attitude led to the creation of history. This is the story of Chandu Champion!",
        promoted: true,
        cast: [
            { name: "Kartik Aaryan", role: "Murlikant Petkar", imgSrc: "/Actors/kartik_aryan.jpg" },
            { name: "Vijay Raaz", role: "Tiger Ali", imgSrc: "/Actors/Vijay_Raaz.jpg" },
            { name: "Bhuvan Arora", role: "Karnail Singh", imgSrc: "/Actors/bhuvan_arora.jpg" },
            { name: "Yashpal Sharma", role: "Uttam Singh", imgSrc: "/Actors/yashpal_sharma.jpg" },
            { name: "Shreyas Talpade", role: "Inspector Sachin Kamble", imgSrc: "/Actors/shreyas_talpade.jpg" },
            { name: "Aniruddh Dave", role: "Jagannath Petkar", imgSrc: "/Actors/anirudh_dave.jpg" }
        ],
        crew: [
            { name: "Kabir Khan", role: "Director", imgSrc: "/Crew/kabir_khan.jpg" },
            { name: "Sajid Nadiadwala", role: "Producer", imgSrc: "/Crew/sajid_nadiadwala.jpg" },
            { name: "Sunit Agarwal", role: "Writer", imgSrc: "/Crew/sumit_arora.jpg" },
            { name: "Pritam", role: "Music Director", imgSrc: "/Crew/pritam.jpg" },
            { name: "Arijit Singh", role: "Playback Singer", imgSrc: "/Crew/arijit_singh.jpg" }
        ]
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
        desc: "A young man`s visit to his native village unveils a family secret and a vengeful spirit, Munjya, who wants to get married. Now the young man must fight to protect himself and his love from Munjya`s clutches leading to a humorously chaotic and terrifying adventure.",
        imgSrc: "/Movies/munjya.avif",
        cast: [
            { name: "Abhay Sharma", role: "Bittu", imgSrc: "/Actors/Abhay_Verma.jpg" },
            { name: "Sharvari Wagh", role: "Bela", imgSrc: "/Actors/sharvari_wagh.jpg" },
            { name: "Mona Singh", role: "Pammi", imgSrc: "/Actors/Mona_Singh.jpg" },
            { name: "Sathyaraj", role: "Padri", imgSrc: "/Actors/Sathyaraj.jpg" },
            { name: "Ajay Purkar", role: "Balu Kaka", imgSrc: "/Actors/Ajay_Purkar.jpg" },
        ],
        crew: [
            { name: "Aditya Sarpotdar", role: "Director", imgSrc: "/Crew/Aditya_Sarpotdar.jpg" },
            { name: "Dinesh Vijan", role: "Producer", imgSrc: "/Crew/Dinesh_Vijan.jpg" },
            { name: "Amar Kaushik", role: "Producer", imgSrc: "/Crew/Amar_Kaushik.jpg" },
            { name: "Sachin-Jigar", role: "Musician", imgSrc: "/Crew/Sachin-Jigar.jpg" },
            { name: "Amitabh Bhattacharaya", role: "Lyricist", imgSrc: "/Crew/Amitabh_Bhattacharaya.jpg" },
            { name: "Saurabh Goswami", role: "Cinematographer", imgSrc: "/Crew/Saurabh_Goswami.jpg" }
        ]
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
        desc: "Mahendra, a failed cricketer and Mahima, a doctor are brought together by the virtue of an arranged marriage. Having the same nickname, Mahi, together they become Mr. and Mrs. Mahi. They soon discover their common love and passion for Cricket. Eventually, Mahendra spots cricketing talent in his wife and encourages her to chase her dream of becoming a cricketer and coaches her on this journey.",
        imgSrc: "/Movies/Mahi.jpg",
        cast: [
            { name: "Rajkumar Rao", role: "as Mahendra", imgSrc: "/Actors/Rajkumar_Rao.jpg" },
            { name: "Janhvi Kapoor", role: "as Mahima", imgSrc: "/Actors/Janhvi_Kapoor.jpg" },
            { name: "Kumud Mishra", role: "Actor", imgSrc: "/Actors/Kumud_Mishra.jpg" }
        ],
        crew: [
            { name: "Sharan Sharma", role: "Director", imgSrc: "/Crew/Sharan_Sharma.jpg" },
            { name: "Hiroo Johar", role: "Producer", imgSrc: "/Crew/Hiroo_Johar.jpg" },
            { name: "Karan Johar", role: "Producer", imgSrc: "/Crew/Karan_Johar.jpg" },
            { name: "Nikhil Mehrotra", role: "Writer", imgSrc: "/Crew/Nikhil_Mehrotra.jpg" },
        ]
    },
    {
        title: "Jatt & Juliet 3",
        genre: "Action Adventure Comedy",
        rating: "8.7/10",
        language: "Hindi",
        duration: "2h 23min ",
        adult: " UA ",
        dimension: "2D",
        votes: "14.7K Votes",
        desc: "A battle of wits begins as Fateh joins the police force and meets his charming boss, Pooja, sparking a romantic comedy of unexpected twists. Will Pooja fall into Fateh`s honey trap, or will Cupid`s arrow lead to real love as they embark on an important mission in this rib-tickling affair?",
        imgSrc: "/Movies/jatt.jpg",
        cast: [
            { name: "Diljit Dosanjh", role: "as Fateh", imgSrc: "/Actors/Diljit_Dosanjh.jpg" },
            { name: "Neeru Bajwa", role: "as Pooja", imgSrc: "/Actors/Neeru_Bajwa.jpg" },
            { name: "Jasmin Bajwa", role: "Actor", imgSrc: "/Actors/Jasmin_Bajwa.jpg" },
            { name: "B.N. sharma", role: "Actor", imgSrc: "/Actors/B.N._sharma.jpg"},
            { name: "Rana Ranbir", role: "Actor", imgSrc: "/Actors/Rana_Ranbir.jpg" },
        ],
        crew: [
            { name: "Jagdeep Sidhu", role: "Director", imgSrc: "/Crew/Jagdeep_Sidhu.jpg" },
            { name: "Gunbir Singh Sidhu", role: "Producer", imgSrc: "/Crew/Gunbir_Singh_Sidhu.jpg" },
            { name: "Manmord Singh Sidhu", role: "Producer", imgSrc: "/Crew/Manmord_Singh_Sidhu.jpg" },
            { name: "Dinesh Aulakh", role: "Producer", imgSrc: "/Crew/Dinesh_Aulakh.jpg" },
            { name: "Jaani", role: "Musiciain", imgSrc: "/Crew/Jaani.jpg" }
        ]
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
        desc: "Inside Out 2 returns to the mind of newly minted teenager Riley just as headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new emotions! Joy, Sadness, Anger, Fear and Disgust, who`ve long been running a successful operation by all accounts, aren`t sure how to feel when Anxiety shows up. And it looks like she`s not alone.",
        imgSrc: "/Movies/inside-out2.jpg",
        cast: [
            { name: "Kensington Tallman", role: "as Riley", imgSrc: "/Actors/Kensington_Tallman.jpg" },
            { name: "Ananya Pandey", role: "as Riley(Hindi)", imgSrc: "/Actors/Ananya_Pandey.jpg" },
            { name: "Amy Poehler", role: "as Joy", imgSrc: "/Actors/Amy_Poehler.jpg" },
            { name: "Maya Hawke", role: "as Anxiety", imgSrc: "/Actors/Maya_Hawke.jpg" },
            { name: "Lewis Black", role: "as Anger", imgSrc: "/Actors/Lewis_Black.jpg" },
            { name: "Phyllis Smith", role: "as Sadness", imgSrc: "/Actors/Phyllis_Smith.jpg" }
        ],
        crew: [
            { name: "Kelsey Mann", role: "Director", imgSrc: "/Crew/Kelsey_Mann.jpg" },
            { name: "Meg LeFauve", role: "Writer", imgSrc: "/Crew/Meg_LeFauve.jpg" },
            { name: "Michael Giacchino", role: "Musiciain", imgSrc: "/Crew/Michael_Giacchino.jpg" },
            { name: "Pete Docter", role: "Exclusive Producer", imgSrc: "/Crew/Pete_Docter.jpg" }
        ]
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
            <div className="about">
                <h2>About the movie</h2>
                <p>{movie.desc}</p>
            </div>
            <div className="cast-crew">
                <h2>Cast</h2>
                <div className="cast">
                    {movie.cast.map((member, index) => (
                        <div key={index} className="member">
                            <img src={member.imgSrc} alt={member.name} />
                            <p>{member.name}</p>
                            <p>{member.role}</p>
                        </div>
                    ))}
                </div>
                <h2>Crew</h2>
                <div className="crew">
                    {movie.crew.map((member, index) => (
                        <div key={index} className="member">
                            <img src={member.imgSrc} alt={member.name} />
                            <p>{member.name}</p>
                            <p>{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Moviedetail;
