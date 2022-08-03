// TODO write saga here

import { all, call, put, takeLatest } from "redux-saga/effects";
import requestDataPokemonFromAPI from "./Helper/api";
import * as $const from "./Helper/constant";
import * as $action from "./Helper/action";

function* apiRequestForPokemon() { // * Effect
  try {
    const response = yield call(requestDataPokemonFromAPI);

    const result = response?.data?.results?.map((resp, i) => {
      return {
        ...resp,
        uniqueID: `${
          i + 1 < 10 ? `00${i + 1}` : i + 1 < 100 ? `0${i + 1}` : `${i + 1}`
        }`,
        apiID: `${i + 1}`,
      };
    });
    yield put($action.getSuccessResponse({ ...response, result })); 
  } catch (error) {
    yield put($action.getErrorResponse(error.message));
  }
}

const watchWhileRequest = [
  takeLatest($const.LOAD_FETCHING_DATA, apiRequestForPokemon),
];

export default function* requestAPIFromSaga() {
  yield all([...watchWhileRequest]);
}