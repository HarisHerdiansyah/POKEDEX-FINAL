import { useNavigate } from 'react-router-dom';
import { Fragment } from 'react';

import Navitem from "../../Components/Navitem/Navitem"
import './Navbar-style.css';

export default function Navbar() {
  const navigate = useNavigate()

  function homepage() {
    navigate('/');
  }

  function pokemonpage() {
    navigate('/pokemon')
  }

  function favoritpage() {
    navigate('/favourite')
  }

  function aboutpage() {
    navigate('/about');
  }


  return (
    <Fragment>
      <input type="checkbox" id="toggle-nav" />
      <nav className="main-nav">
        <div className="nav-brand">
          <img src="https://www.freepnglogos.com/uploads/pokemon-logo-text-png-7.png" alt="pokemon logo text png" />
        </div>

        <div className="nav-link">
          <ul>
            <li className="toggle">
              <label htmlFor="toggle-nav">
                <i className="fas fa-bars"></i>
              </label>
            </li>
            <Navitem onClick={homepage}>Beranda</Navitem>
            <Navitem onClick={pokemonpage}>Pokemon</Navitem>
            <Navitem onClick={favoritpage}>Favorit</Navitem>
            <Navitem onClick={aboutpage}>Tentang</Navitem>
          </ul>
        </div>
      </nav>

      <div id="nav-expand">
      <ul>
        <li className="nav-item">
          <Navitem onClick={homepage}><i className="fas fa-home"></i>Beranda</Navitem>
        </li>
        <li className="nav-item">
          <Navitem onClick={pokemonpage}><i className="fas fa-list-ul"></i>Pokemon</Navitem>
        </li>
        <li className="nav-item">
          <Navitem onClick={favoritpage}><i className="fas fa-list-ul"></i>Favorit</Navitem>
        </li>
        <li className="nav-item">
          <Navitem onClick={aboutpage}><i className="fas fa-info-circle"></i>Tentang</Navitem>
        </li>
      </ul>
      </div>
    </Fragment>
  )
}