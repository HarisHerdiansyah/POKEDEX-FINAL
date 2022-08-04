import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';

import Navbar from "./Layout/Navbar/Navbar";
import Footer from "./Layout/Footer/Footer";
import Home from "./Pages/Home/Home";
import Pokemon from "./Pages/Pokemon/Pokemon";
import About from "./Pages/About/About";
import rootStore from "./Redux/store";


function App() {
  return (
    <Provider store={rootStore}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pokemon' element={<Pokemon />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App