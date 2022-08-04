// TODO write saga here

import { all, call, put, takeLatest } from "redux-saga/effects";
import { requestDataPokemonFromAPI } from "./Helper/api";
import * as constant from "./Helper/constant";
import * as action from "./Helper/action";

function* apiRequestForPokemon() {
  try {
    const response = yield call(requestDataPokemonFromAPI);
    const result = response?.data?.result?.map((data, i) => {
      return {
        ...data,
        uniqueID: `${
          i + 1 < 10 ? `00${i + 1}` : i + 1 < 100 ? `0${i + 1}` : `${i + 1}`
        }`,
        apiID: `${i + 1}`,
        placeholderImg:
          "https://www.pngplay.com/wp-content/uploads/2/Pokeball-PNG-Photo-Image.png",
      };
    });
    yield put(action.getSuccessResponse(result));
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
