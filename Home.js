import React from 'react';
import MovieList from './MovieList'; 
import './Home.css'; 


const Home = () => {
  return (
    <div>
      <h2 class='main-heading'>Welcome to Movie Explorer</h2>
      <MovieList /> {}
    </div>
  );
};

export default Home;
