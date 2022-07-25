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
          </Routes>
          </div>
        <Footer/>

      </BrowserRouter>

    </div>
  );
}

export default App;
