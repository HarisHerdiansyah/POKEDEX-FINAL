import axios from "axios";

export default function requestDataPokemonFromAPI() {
  return axios.get("https://pokedexbackend.herokuapp.com/pokemon");
}