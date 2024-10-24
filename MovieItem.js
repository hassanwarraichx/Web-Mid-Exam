import React from 'react';

const MovieItem = ({ movie }) => {
  return (
    <div className="movie-item">
      <h3>{movie.title}</h3>
      <p>Release Date: {movie.releaseDate}</p>
      <p>Rating: {movie.rating}</p>
    </div>
  );
};

export default MovieItem;
