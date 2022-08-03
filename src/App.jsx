import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Layout/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Pokemon from "./Pages/Pokemon/Pokemon";
import About from "./Pages/About/About";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pokemon' element={<Pokemon />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App