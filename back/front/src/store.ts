import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./Reducers";
import { rootSaga } from "./Sagas";

const composeEnhancer = compose;

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, {}, composeEnhancer(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);
