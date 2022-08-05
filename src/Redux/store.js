// TODO write and export store here

import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import pokemonReducer from "./slice";
import requestAPIFromSaga from "./sagas";

const persistConfig = {
  key: "pokemonReducer",
  storage,
}

const persistedReducer = persistReducer(persistConfig, pokemonReducer);
const sagaMiddleware = createSagaMiddleware();
const rootStore = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
const persistor = persistStore(rootStore)

sagaMiddleware.run(requestAPIFromSaga);

export { rootStore, persistor };