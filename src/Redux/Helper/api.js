import axios from "axios";

const requestDataPokemonFromAPI = () => {
  return axios.get("https://pokedexbackend.herokuapp.com/pokemon");
}

export default requestDataPokemonFromAPI;