import React from 'react';
import Navbar from './Component/Navbar';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from './Component/Home';
import About from './Component/About';
const App = () => {
  return (
    <div>
      
      <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
      </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
