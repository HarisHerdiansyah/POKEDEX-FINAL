import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestDetailPokemon } from '../../Redux/Helper/api';

function PokemonDetails() {
  const params = useParams();
  const ID = params.id;
  const [pokemonDetails, setPokemonDetails] = useState([]);

  useEffect(() => {
    requestDetailPokemon(ID)
      .then(response => setPokemonDetails(response?.data?.result))
  }, [ID]);

  return (
    <div>
      {
        JSON.stringify(pokemonDetails)
      }
    </div>
  )
}



export default PokemonDetails;