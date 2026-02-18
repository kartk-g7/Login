import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie, isLargeRow }) => {
    return (
        <div className={`movie-card ${isLargeRow ? 'movie-card-large' : ''}`}>
            <img
                className="movie-poster"
                src={movie['#IMG_POSTER']}
                alt={movie['#TITLE']}
                loading="lazy"
            />
            <div className="movie-info">
                <span className="movie-title">{movie['#TITLE']}</span>
            </div>
        </div>
    );
};

export default MovieCard;
