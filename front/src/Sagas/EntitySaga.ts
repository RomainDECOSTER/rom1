import IEntityModel from '../Api/Datamodel/IEntityModel';
import IPageableIEntityModel from '../Api/Datamodel/IPageableIEntityModel';
import { IEntitySaga } from './IEntitySaga';
import { Routine } from 'redux-saga-routines';
import { BaseActions } from '../Tools/BaseActions';
import { takeEvery, put } from 'redux-saga/effects';
import IApiService from '../Api/IApiService';
import { AxiosResponse } from 'axios';

export class EntitySaga<T extends IEntityModel, K extends IPageableIEntityModel<T>> implements IEntitySaga<T, K> {
  private _listRoutine: Routine;
  private _axios: IApiService<T, K>;

  constructor(axios: IApiService<T, K>, listRoutine: Routine) {
    this._listRoutine = listRoutine;
    this._axios = axios;
  }

  watchListRoutine(): any {
    const self = this;
    return function* watch() {
      yield takeEvery(self._listRoutine.TRIGGER, self.getListFromServer());
    };
  }
  getListFromServer(): any {
    const self = this;
    return function* list(action: BaseActions) {
      try {
        yield put(self._listRoutine.request());
        const response: AxiosResponse<K> = yield self._axios.retrieve(action.payload.options, action.payload.pageNumber, action.payload.itemNumber);
        yield put(self._listRoutine.success(response.data));
      } catch (error) {
        console.log(error);
        yield put(self._listRoutine.failure(new Error('List saga error')));
      }
    };
  }
}
