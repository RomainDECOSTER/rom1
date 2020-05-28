import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './Reducers';
import { rootSaga } from './Sagas';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routinePromiseWatcherSaga } from 'redux-saga-routines';
import { createHashHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { materialCells, materialRenderers } from '@jsonforms/material-renderers';
import { Actions } from '@jsonforms/core';
import thunk from 'redux-thunk';
import MultiSelect from './Components/MultipleSelect/MultiSelect';
import MultiSelectTester from './Components/MultipleSelect/MultiSelectTester';
import WorkshopSelectTester from './Components/WorkshopSelect/WorkshopSelectTester';
import WorkshopSelect from './Components/WorkshopSelect/WorkshopSelect';

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
  composeWithDevTools(applyMiddleware(thunk), applyMiddleware(sagaMiddleware), applyMiddleware(routerMiddleware(history))),
);
store.dispatch(Actions.registerRenderer(MultiSelectTester, MultiSelect));
store.dispatch(Actions.registerRenderer(WorkshopSelectTester, WorkshopSelect));
sagaMiddleware.run(rootSaga);
sagaMiddleware.run(routinePromiseWatcherSaga);
