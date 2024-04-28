// Movie.js

import React from 'react';

function Movie({ title, year, type, poster }) {
  const handleClick = () => {
    // Add code here to handle the click event, such as navigating to a movie details page
    console.log('Clicked on movie:', title);
  };

  return (
    <div className="movie" onClick={handleClick}> {/* Add onClick event handler to the entire component */}
      <h2>{title}</h2>
      <p>Year: {year}</p>
      <p>Type: {type}</p>
      {poster !== 'N/A' && <img src={poster} alt={title} />}
    </div>
  );
}

export default Movie;
