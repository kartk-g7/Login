import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { fetchMovies, requests } from '../services/api';
import './HeroBanner.css';
import { FaPlay, FaInfoCircle } from 'react-icons/fa';

const HeroBanner = () => {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        async function fetchData() {
            // Fetch trending (simulated by 'avengers' or similar popular)
            const movies = await fetchMovies(requests.fetchTrending);
            if (movies && movies.length > 0) {
                // Pick a random movie
                const randomMovie = movies[Math.floor(Math.random() * movies.length)];
                setMovie(randomMovie);
            }
        }
        fetchData();
    }, []);

    if (!movie) return <div className="hero-banner-loader">Loading...</div>;

    // Use high-res poster if available, or just the one we have
    const backgroundStyle = {
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.1)), url(${movie['#IMG_POSTER']})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
    };

    return (
        <header className="hero-banner" style={backgroundStyle}>
            <div className="hero-content">
                <h1 className="hero-title">{movie['#TITLE']}</h1>
                <div className="hero-buttons">
                    <button className="banner-button play"><FaPlay className="btn-icon" /> Play</button>
                    <button className="banner-button info"><FaInfoCircle className="btn-icon" /> More Info</button>
                </div>
                <div className="hero-description">
                    <span className="imdb-badge">IMDb {movie['#RANK'] ? (10 - (movie['#RANK'] % 10)).toFixed(1) : '8.5'}</span> {/* Mocking rating based on rank or random for visuals */}
                    <span className="hero-year">{movie['#YEAR']}</span>
                    <p className="hero-synopsis">
                        Starring: {movie['#ACTORS']}
                    </p>
                </div>
            </div>
            <div className="hero-fade-bottom" />
        </header>
    );
};

export default HeroBanner;
