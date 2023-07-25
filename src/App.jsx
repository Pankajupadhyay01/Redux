import React from 'react';
import Navbar from './Component/Navbar';
import { Routes, Route, BrowserRouter } from "react-router-dom" 
import About from './Component/About';
import Login from './Component/Login';
import Home from './Component/home';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>      
        <Routes>
        <Route path="/" element={<Login/>} /> 
        <Route path="home" element={<Home/>} /> 
        <Route path="about" element={ <About/> } />

      </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
