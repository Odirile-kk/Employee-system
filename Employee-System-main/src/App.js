
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import Update from './components/Update';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route>
      <Route path='/' element={<Home  />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/login' element={<Login/>}></Route>
        
        <Route path='/create' element={<Create  />}></Route>
        <Route path='/update/:id' element={<Update />}></Route>
       
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
