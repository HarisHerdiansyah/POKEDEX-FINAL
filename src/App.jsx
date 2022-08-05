import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { rootStore, persistor } from "./Redux/store";

import Navbar from "./Layout/Navbar/Navbar";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import Home from "./Pages/Home/Home";
import Pokemon from "./Pages/Pokemon/Pokemon";
import PokemonDetails from './Pages/Pokemon/PokemonDetails';
import PokemonFavourite from './Pages/Pokemon/PokemonFavourite';
import About from "./Pages/About/About";
import ErrorPage from './Pages/ErrorPage/ErrorPage';

function App() {
  return (
    <Provider store={rootStore}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Header />
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pokemon' element={<Pokemon />} />
            <Route path='/favourite' element={<PokemonFavourite />} />
            <Route path='/pokemon/:id' element={<PokemonDetails />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App