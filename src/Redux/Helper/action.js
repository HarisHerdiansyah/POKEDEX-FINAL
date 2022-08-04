import * as constant from "./constant";

export function setLoad(payload) {
  return {
    type: constant.LOAD_FETCHING_DATA,
    payload,
  };
}

export function getSuccessResponse(payload) {
  return {
    type: constant.GET_SUCCESS_RESPONSE,
    payload,
  };
}

export function getErrorResponse(payload) {
  return {
    type: constant.GET_ERROR_RESPONSE,
    payload,
  };
}

export function addFavouritePokemon(payload) {
  return {
    type: constant.ADD_FAVOURITE_POKEMON,
    payload,
  };
}
