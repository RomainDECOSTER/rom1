import IEntityModel from '../Api/Datamodel/IEntityModel';
import IPageableIEntityModel from '../Api/Datamodel/IPageableIEntityModel';
import { IEntityRedux } from './IEntityRedux';
import { IEntitySate } from './IEntityRedux';
import { Routine } from 'redux-saga-routines';
import { BaseActions } from '../Tools/BaseActions';

export class EntityRedux<T extends IEntityModel, K extends IPageableIEntityModel<T>> implements IEntityRedux<T, K> {
  private _listRoutine: Routine;
  private _createRoutine: Routine;
  constructor(listRoutine: Routine, createRoutine: Routine) {
    this._listRoutine = listRoutine;
    this._createRoutine = createRoutine;
    this.getReducer = this.getReducer.bind(this);
  }
  getReducer(state: IEntitySate<T, K> = { loading: false }, action: BaseActions): IEntitySate<T, K> {
    switch (action.type) {
      case this._listRoutine.REQUEST:
        return { ...state, loading: true, created: false };
      case this._listRoutine.SUCCESS:
        return { ...state, loading: false, list: action.payload, successed: true };
      case this._createRoutine.REQUEST:
        return { ...state, creating: true };
      case this._createRoutine.SUCCESS:
        return { ...state, creating: false, created: true };
      default:
        return state;
    }
  }
}
