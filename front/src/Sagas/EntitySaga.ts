import IEntityModel from '../Api/Datamodel/IEntityModel';
import IPageableIEntityModel from '../Api/Datamodel/IPageableIEntityModel';
import { IEntitySaga } from './IEntitySaga';
import { Routine } from 'redux-saga-routines';
import { BaseActions } from '../Tools/BaseActions';
import { takeEvery, put, select, all, fork } from 'redux-saga/effects';
import IApiService from '../Api/IApiService';
import { AxiosResponse } from 'axios';
import { State } from '../Reducers';

export class EntitySaga<T extends IEntityModel, K extends IPageableIEntityModel<T>> implements IEntitySaga<T, K> {
  private _listRoutine: Routine;
  private _createRoutine: Routine;
  private _deleteRoutine: Routine;
  private _viewRoutine: Routine;
  private _updateRoutine: Routine;
  private _axios: IApiService<T, K>;

  constructor(axios: IApiService<T, K>, listRoutine: Routine, createRoutine: Routine, deleteRoutine: Routine, viewRoutine: Routine, updateRoutine: Routine) {
    this._listRoutine = listRoutine;
    this._createRoutine = createRoutine;
    this._deleteRoutine = deleteRoutine;
    this._viewRoutine = viewRoutine;
    this._updateRoutine = updateRoutine;
    this._axios = axios;
  }
  runSaga() {
    const self = this;
    return function* run() {
      yield all([fork(self.watchCreateRoutine()), fork(self.watchListRoutine()), fork(self.watchUpdateEntityRoutine()), fork(self.watchDeleteRoutine()), fork(self.watchEntityViewRoutine())]);
    };
  }
  updateEntity() {
    const self = this;
    return function* update(action: BaseActions) {
      try {
        yield put(self._updateRoutine.request());
        yield self._axios.update(action.payload);
        yield put(self._updateRoutine.success());
      } catch (error) {
        console.log(error);
        yield put(self._updateRoutine.failure(new Error('Update saga error')));
      }
    };
  }
  watchUpdateEntityRoutine() {
    const self = this;
    return function* watch() {
      yield takeEvery(self._updateRoutine.TRIGGER, self.updateEntity());
    };
  }
  setUserView() {
    const self = this;
    return function* view(action: BaseActions) {
      yield put(self._viewRoutine.success(action.payload)); //payload must be id
    };
  }

  watchEntityViewRoutine() {
    const self = this;
    return function* watch() {
      yield takeEvery(self._viewRoutine.TRIGGER, self.setUserView());
    };
  }
  deleteEntity() {
    const self = this;
    return function* remove(action: BaseActions) {
      try {
        yield put(self._deleteRoutine.request());
        yield self._axios.delete(action.payload);
        yield put(self._deleteRoutine.success(action.payload));
      } catch (error) {
        yield put(self._deleteRoutine.failure(new Error('Delete saga error')));
      }
    };
  }
  watchDeleteRoutine() {
    const self = this;
    return function* watch() {
      yield takeEvery(self._deleteRoutine.TRIGGER, self.deleteEntity());
    };
  }

  watchListRoutine(): any {
    const self = this;
    return function* watch() {
      yield takeEvery(self._listRoutine.TRIGGER, self.getListFromServer());
    };
  }

  watchCreateRoutine(): any {
    const self = this;
    return function* watch() {
      yield takeEvery(self._createRoutine.TRIGGER, self.createEntity());
    };
  }

  createEntity(): any {
    const self = this;
    return function* create(action: BaseActions) {
      try {
        yield put(self._createRoutine.request());
        yield self._axios.create(action.payload);
        yield put(self._createRoutine.success());
      } catch (error) {
        yield put(self._createRoutine.failure(new Error('Create saga error')));
      }
    };
  }

  getListFromServer(): any {
    const self = this;
    return function* list(action: BaseActions) {
      try {
        yield put(self._listRoutine.request());
        const state: State = yield select();
        const response: AxiosResponse<K> = yield self._axios.retrieve(
          action.payload.options,
          action.payload.pageNumber,
          action.payload.itemNumber,
          state.users.sortKey,
          state.users.sortKey !== undefined ? state.users.sortDir : undefined,
        );
        yield put(self._listRoutine.success(response.data));
      } catch (error) {
        console.log(error);
        yield put(self._listRoutine.failure(new Error('List saga error')));
      }
    };
  }
}
