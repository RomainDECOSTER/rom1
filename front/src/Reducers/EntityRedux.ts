import IEntityModel from '../Api/Datamodel/IEntityModel';
import IPageableIEntityModel from '../Api/Datamodel/IPageableIEntityModel';
import { IEntityRedux } from './IEntityRedux';
import { IEntitySate } from './IEntityRedux';
import { Routine } from 'redux-saga-routines';
import { BaseActions } from '../Tools/BaseActions';

export class EntityRedux<T extends IEntityModel, K extends IPageableIEntityModel<T>> implements IEntityRedux<T, K> {
  private _listRoutine: Routine;
  constructor(listRoutine: Routine) {
    this._listRoutine = listRoutine;
    this.getReducer = this.getReducer.bind(this);
  }
  getReducer(state: IEntitySate<T, K> = { loading: false }, action: BaseActions): IEntitySate<T, K> {
    switch (action.type) {
      case this._listRoutine.REQUEST:
        return { ...state, loading: true };
      case this._listRoutine.SUCCESS:
        return { ...state, loading: false, list: action.payload, successed: true };
      default:
        return state;
    }
  }
}
