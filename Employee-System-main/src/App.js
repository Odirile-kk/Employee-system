import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import Update from './components/Update';
import Info from './components/Info';
import { useState } from "react";


function App() {
  const [selectedImage, setSelectedImage] = useState('');


    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            setSelectedImage(reader.result);
            console.log(selectedImage)
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };
  return (
    <BrowserRouter>
    <Routes>
      <Route>
        <Route path='/' element={<Home selectedImage={selectedImage} />}></Route>
        <Route path='/create' element={<Create handleImageUpload={handleImageUpload}  />}></Route>
        <Route path='/update/:id' element={<Update />}></Route>
        <Route path='/info/:id' element={<Info />}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
