import { useState } from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import Update from './components/Update';
import Register from './components/Register';
import Login from './components/Login';
import LandingPage from './components/LandingPage';

function App() {

  const token = localStorage.getItem('jwtToken')

  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<LandingPage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          {token ? (
          <>
            <Route path='/home' element={<Home />} />
            <Route path='/create' element={<Create />} />
            <Route path='/update/:id' element={<Update />} />
            </>
        ) : (
         
          <Route path="/" replace={true} />
         
        )}
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
