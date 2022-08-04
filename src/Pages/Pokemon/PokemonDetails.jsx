import React, { useEffect, useState } from 'react';
import './PokemonDetails.css'
import { useParams } from 'react-router-dom';
import { requestDetailPokemon } from '../../Redux/Helper/api';

function PokemonDetails() {
  const params = useParams();
  const ID = params.id;
  const [pokemonDetails, setPokemonDetails] = useState({});

  useEffect(() => {
    requestDetailPokemon(ID)
      .then(response => setPokemonDetails(response?.data?.result))
  }, [ID]);

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
                  {/* <div className='Poison'>Placeholder</div>
                <div className='Dragon'>Placeholder</div> */}
                  {
                    pokemonDetails?.types?.map((type, i) => {
                      return (
                        <div className={type} key={i}>{type}</div>
                      )
                    })
                  }
                </div>
              </div>
              <div>
                <h2>Kemampuan</h2>
                <div>
                  {
                    pokemonDetails?.abilities?.map((ability, i) => {
                      return (
                        <div key={i}>{ability}</div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
            <div className='container-statistik'>
              <h2>Statistik</h2>
              <div className='statistik'>
                {
                  pokemonDetails?.stats?.map((stat, i) => {
                    return (
                      <div key={i}>
                        <h4>{stat.name}</h4>
                        <div>{stat.value}</div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonDetails;
