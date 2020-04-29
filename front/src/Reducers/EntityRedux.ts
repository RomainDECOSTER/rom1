import IEntityModel from '../Api/Datamodel/IEntityModel';
import IPageableIEntityModel from '../Api/Datamodel/IPageableIEntityModel';
import { IEntityRedux } from './IEntityRedux';
import { IEntitySate } from './IEntityRedux';
import { Routine } from 'redux-saga-routines';
import { BaseActions } from '../Tools/BaseActions';

export class EntityRedux<T extends IEntityModel, K extends IPageableIEntityModel<T>> implements IEntityRedux<T, K> {
  private _listRoutine: Routine;
  private _initialState: IEntitySate<T, K>;
  constructor(listRoutine: Routine, initialState: IEntitySate<T, K>) {
    this._listRoutine = listRoutine;
    this._initialState = initialState;
    this.getReducer = this.getReducer.bind(this);
  }
  getReducer(state: IEntitySate<T, K> = {}, action: BaseActions): IEntitySate<T, K> {
    switch (action.type) {
      case this._listRoutine.REQUEST:
        return { ...state, loading: true };
      case this._listRoutine.SUCCESS:
        return { ...state, loading: false, list: action.payload, successed: true };
      default:
        if (state === undefined) {
          return this._initialState;
        }
        return state;
    }
  }
}
