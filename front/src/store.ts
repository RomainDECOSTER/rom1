import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './Reducers';
import { rootSaga } from './Sagas';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routinePromiseWatcherSaga } from 'redux-saga-routines';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();
export const store = createStore(rootReducer(history), {}, composeWithDevTools(applyMiddleware(sagaMiddleware), applyMiddleware(routerMiddleware(history))));

sagaMiddleware.run(rootSaga);
sagaMiddleware.run(routinePromiseWatcherSaga);
