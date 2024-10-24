import React from 'react';
import MovieItem from './MovieItem'; 
import './MovieList.css'; 


const MovieList = () => {
  
  const movies = [
    {
      id: 1,
      title: 'Lost',
      releaseDate: '10th April 2004',
      rating: '9',
    },
    {
      id: 2,
      title: 'Snowfall',
      releaseDate: '10th April 2004',
      rating: '9',
    },
    {
      id: 3,
      title: 'GOT',
      releaseDate: '10th April 2004',
      rating: '8',
    },
    {
      id: 4,
      title: 'Person of Interest',
      releaseDate: '10th April 2004',
      rating: '6',  
    },
    {
      id: 5,
      title: 'Prison Break',
      releaseDate: '10th April 2004',
      rating: '10',
    },
  ];

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
