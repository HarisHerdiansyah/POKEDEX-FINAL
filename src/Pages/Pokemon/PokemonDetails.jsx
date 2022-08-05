// * library / module
import React, { useEffect, useState } from 'react';
import './PokemonDetails.css'
import { useParams } from 'react-router-dom';
import { requestDetailPokemon } from '../../Redux/Helper/api';

// * assests / components
import defaultImg from "../../Assets/img/pokemon-default-image.png";

function PokemonDetails() {
  const params = useParams();
  const ID = params.id;
  const [pokemonDetails, setPokemonDetails] = useState({});

  useEffect(() => {
    requestDetailPokemon(ID)
      .then(response => setPokemonDetails(response?.data?.result))
      .catch(() => {
        setPokemonDetails({
          name: `Pokemon No. ${ID}`,
          image: defaultImg,
          abilities: ["Unknown"],
          types: ["Unknown"],
          stats: [
            {
              name: "HP",
              value: 0
            },
            {
              name: "ATTACK",
              value: 0
            },
            {
              name: "DEFENSE",
              value: 0
            },
            {
              name: "SPECIAL-ATTACK",
              value: 0
            },
            {
              name: "SPECIAL-DEFENSE",
              value: 0
            },
            {
              name: "SPEED",
              value: 0
            },
          ]
        })
      })
  }, [ID]);

  return (
    <div className='details-container'>
      <div className='details-header'>
        <h1>Data Lengkap {pokemonDetails.name}</h1>
      </div>
      <div className='details-pokemon'>
        <div className='pokemon-image'>
          <img src={pokemonDetails.image} alt={pokemonDetails.name}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = defaultImg;
            }} />
        </div>
        <div className='stats'>
          <div className='tipe'>
            <div>
              <h2>Tipe</h2>
              <div className='tipe-tipe'>
                {
                  pokemonDetails?.types?.map((type, i) => {
                    return (
                      <div className={type} key={i} style={{fontSize: "18px"}}>{type}</div>
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
                      <div key={i} style={{fontSize: "18px"}}>{ability}</div>
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
  )
}

export default PokemonDetails;