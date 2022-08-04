// TODO write initialState & reducer here

import * as constant from "./Helper/constant";

const pokemonState = {
  loadFetchingData: false,
  failFetch: false,
  pokemonSuccessResponse: [],
  pokemonErrorResponse: [],
};

const pokemonReducer = (state = pokemonState, action) => {
  switch (action.type) {
    case constant.LOAD_FETCHING_DATA:
      return { ...state, loadFetchingData: true };

    case constant.GET_SUCCESS_RESPONSE:
      return {
        ...state,
        loadFetchingData: false,
        pokemonSuccessResponse: action.payload,
      };

    case constant.GET_ERROR_RESPONSE:
      return {
        ...state,
        loadFetchingData: false,
        failFetch: true,
        pokemonErrorResponse: action.payload,
      };

    default:
      return state;
  }
};

export default pokemonReducer;
