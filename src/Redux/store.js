// TODO write and export store here

import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import pokemonReducer from "./slice";
import requestAPIFromSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const rootStore = createStore(pokemonReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(requestAPIFromSaga);

export default rootStore;