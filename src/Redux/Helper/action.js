import * as $const from "./constant";

export function loadFetchingData(payload) {
  return {
    type: $const.LOAD_FETCHING_DATA,
    payload,
  };
}

export function getSuccessResponse(payload) {
  return {
    type: $const.GET_SUCCESS_RESPONSE,
    payload,
  };
}

export function getErrorResponse(payload) {
  return {
    type: $const.GET_ERROR_RESPONSE,
    payload,
  };
}