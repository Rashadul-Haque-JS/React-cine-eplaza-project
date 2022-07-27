import './App.scss';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Home } from './components/home/Home'
import MovieDetails from './components/movieDetail/MovieDetail'
import Login from './components/login/Login'
import ResetPasword from './components/ResetPassword/ResetPasword';
import Register from './components/Register/Register';
import Screen from './components/Screen/Screen';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movieInfo/:name" element={<MovieDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/resetPassword" element={<ResetPasword />} />
            <Route path="/register" element={<Register />} />
            <Route path="/screen" element={<Screen />} />
          </Routes>
          </div>
        <Footer/>

      </BrowserRouter>

    </div>
  );
}

export default App;
