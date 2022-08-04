import React, { useEffect, useState } from 'react';
import './PokemonDetails.css'
import { useParams } from 'react-router-dom';
import { requestDetailPokemon } from '../../Redux/Helper/api';

function PokemonDetails() {
  return (
    <div>
    <div className='details-container'>
      <div className='details-header'>
        <h1>Data Lengkap {pokemonDetails.name}</h1>
      </div>
      <div className='details-pokemon'>
        <div className='pokemon-image'>
          <img src={pokemonDetails.image} alt="" />
        </div>
        <div className='stats'>
          <div className='tipe'>
            <div>
              <h2>Tipe</h2>
              <div className='tipe-tipe'>
                <div className='Flying'>Placeholder</div>
                <div className='Dragon'>Placeholder</div>
              </div>
            </div>
            <div>
              <h2>Kemampuan</h2>
              <div>placeholder</div>
            </div>
          </div>
          <div className='container-statistik'>
            <h2>Statistik</h2>
            <div className='statistik'>
              <div>
                <h4>HP</h4>
                <div>value</div>
              </div>
              <div>
                <h4>Attack</h4>
                <div>value</div>
              </div>
              <div>
                <h4>Defense</h4>
                <div>value</div>
              </div>
              <div>
                <h4>Special Attack</h4>
                <div>value</div>
              </div>
              <div>
                <h4>Special Defense</h4>
                <div>value</div>
              </div>
              <div>
                <h4>Speed</h4>
                <div>value</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default PokemonDetails;
