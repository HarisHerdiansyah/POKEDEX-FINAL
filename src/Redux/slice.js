// TODO write initialState & reducer here

import * as $const from "./Helper/constant";

const initialStateForPokemonData = {
  loadFetchingData: false,
  failFetchingData: false,
  pokemonSuccessResponse: {},
  pokemonErrorResponse: {},
};

const pokemonReducer = (state = initialStateForPokemonData, action) => {
  switch (action.type) {
    case $const.LOAD_FETCHING_DATA:
      return { ...state, loadFetchingData: true };

    case $const.GET_SUCCESS_RESPONSE:
      return {
        ...state,
        loadFetchingData: false,
        pokemonSuccessResponse: action.payload,
      };

    case $const.GET_ERROR_RESPONSE:
      return {
        ...state,
        loadFetchingData: false,
        failFetchingData: true,
        pokemonErrorResponse: action.payload,
      };
  }
};

export default pokemonReducer;