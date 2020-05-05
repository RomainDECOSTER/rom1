import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './Reducers';
import { rootSaga } from './Sagas';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routinePromiseWatcherSaga } from 'redux-saga-routines';
import { createHashHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { materialCells, materialRenderers } from '@jsonforms/material-renderers';

const sagaMiddleware = createSagaMiddleware();
export const history = createHashHistory();
export const store = createStore(
  rootReducer(history),
  {
    jsonforms: {
      cells: materialCells,
      renderers: materialRenderers,
    },
  },
  composeWithDevTools(applyMiddleware(sagaMiddleware), applyMiddleware(routerMiddleware(history))),
);
sagaMiddleware.run(rootSaga);
sagaMiddleware.run(routinePromiseWatcherSaga);
