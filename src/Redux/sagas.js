// TODO write saga here

import { all, call, put, takeLatest } from "redux-saga/effects";
import requestDataPokemonFromAPI from "./Helper/api";
import * as constant from "./Helper/constant";
import * as action from "./Helper/action";

function* apiRequestForPokemon() {
  try {
    const response = yield call(requestDataPokemonFromAPI);
    yield put(action.getSuccessResponse(response?.data?.result)); 
  } catch (error) {
    yield put(action.getErrorResponse(error.message));
  }
}

const watchWhileRequest = [
  takeLatest(constant.LOAD_FETCHING_DATA, apiRequestForPokemon),
];

export default function* requestAPIFromSaga() {
  yield all([...watchWhileRequest]);
}