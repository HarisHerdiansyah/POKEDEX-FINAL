import axios from "axios";

export const requestDataPokemonFromAPI = () => {
  return axios.get("https://pokedexbackend.herokuapp.com/pokemon");
};

export const requestDetailPokemon = (id) => {
  return axios.get(`https://pokedexbackend.herokuapp.com/pokemon/${id}`);
};
