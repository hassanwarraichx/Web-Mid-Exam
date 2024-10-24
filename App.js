import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header'; 
import Footer from './Footer'; 
import Home from './Home';    
import Search from './Search'; 
import Favorites from './Favorites'; 

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> {}
        <Route path="/search" element={<Search />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <Footer /> {}
    </Router>
  );
}

export default App;
