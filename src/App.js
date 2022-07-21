import './App.scss';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home'
import MovieDetails from './components/movieDetail/MovieDetail'
import Login from './components/login/Login'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MovieDetails />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer/>

      </BrowserRouter>

    </div>
  );
}

export default App;
