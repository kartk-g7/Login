import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { fetchMovies } from '../services/api';
import MovieCard from './MovieCard';
import './Row.css';

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            // fetchUrl is actually a query string in our implementation
            const request = await fetchMovies(fetchUrl);
            setMovies(request);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    return (
        <div className="row">
            <h2 className="row-title">{title}</h2>
            <div className="row-posters">
                {movies && movies.map((movie) => (
                    ((isLargeRow && movie['#IMG_POSTER']) || (!isLargeRow && movie['#IMG_POSTER'])) && (
                        <MovieCard
                            key={movie['#IMDB_ID']}
                            movie={movie}
                            isLargeRow={isLargeRow}
                        />
                    )
                ))}
            </div>
        </div>
    );
};

export default Row;
