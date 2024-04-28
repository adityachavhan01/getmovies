// MovieList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './Movie';

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = 'e6f0f1d5'; // Replace with your actual OMDB API key
      const response = await axios.get(`http://www.omdbapi.com/?s=brad&apikey=${apiKey}&page=1`);
      setMovies(response.data.Search || []);
    };

    // useEffect(() => {
    //   const fetchData = async () => {
    //     const apiKey = 'e6f0f1d5'; // Replace with your actual OMDB API key
    //     const response = await axios.get(`http://www.omdbapi.com/?s=brad&apikey=${apiKey}&page=1`);
    //     setMovies(response.data.Search || []);
    //   };

    fetchData();
  }, []);

  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <Movie
          key={index}
          title={movie.Title}
          year={movie.Year}
          type={movie.Type}
          poster={movie.Poster}
        />
      ))}
    </div>
  );
}

export default MovieList;
