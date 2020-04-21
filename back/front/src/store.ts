import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./Reducers";
import { rootSaga } from "./Sagas";
import { composeWithDevTools } from "redux-devtools-extension";
import { routinePromiseWatcherSaga } from "redux-saga-routines";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);
sagaMiddleware.run(routinePromiseWatcherSaga);
