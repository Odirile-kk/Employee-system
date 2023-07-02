import { useState } from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import Update from './components/Update';
import Register from './components/Register';
import Login from './components/Login';
import LandingPage from './components/LandingPage';
import ProtectedRoute from './components/ProtectedRoute';


function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<LandingPage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          {/* protected routes */}
          <Route element={<ProtectedRoute/>}>
          <Route path='/home' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/update/:id' element={<Update /> } />
          
          </Route>
         
         
          
      </Routes>
    </BrowserRouter>
  );
}

export default App;
