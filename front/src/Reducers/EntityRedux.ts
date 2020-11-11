import IEntityModel from '../Api/Datamodel/IEntityModel';
import IPageableIEntityModel from '../Api/Datamodel/IPageableIEntityModel';
import { IEntityRedux } from './IEntityRedux';
import { IEntitySate } from './IEntityRedux';
import { Routine } from 'redux-saga-routines';
import { BaseActions } from '../Tools/BaseActions';
import { history } from '../store';

export class EntityRedux<T extends IEntityModel, K extends IPageableIEntityModel<T>> implements IEntityRedux<T, K> {
  private _listRoutine: Routine;
  private _createRoutine: Routine;
  private _deleteRoutine: Routine;
  private _viewRoutine: Routine;
  private _updateRoutine: Routine;
  private _sortRoutine: Routine;
  private _searchRoutine: Routine;
  constructor(listRoutine: Routine, createRoutine: Routine, deleteRoutine: Routine, viewRoutine: Routine, updateRoutine: Routine, sortRoutine: Routine, searchRoutine: Routine) {
    this._listRoutine = listRoutine;
    this._createRoutine = createRoutine;
    this._deleteRoutine = deleteRoutine;
    this._viewRoutine = viewRoutine;
    this._updateRoutine = updateRoutine;
    this._sortRoutine = sortRoutine;
    this._searchRoutine = searchRoutine;
    this.getReducer = this.getReducer.bind(this);
  }
  getReducer(state: IEntitySate<T, K> = { loading: false, sortDir: 'desc' }, action: BaseActions): IEntitySate<T, K> {
    switch (action.type) {
      case this._searchRoutine.REQUEST:
        return { ...state, loading: true, simpleSearchOptionskey: action.payload.key, simpleSearchOptionsValue: action.payload.value, simpleSearchOptionsActive: true };
      case this._listRoutine.TRIGGER:
        if (action.payload !== undefined && action.payload.searchActive !== undefined && action.payload.searchActive === false) {
          return { ...state, simpleSearchOptionsActive: false, simpleSearchOptionsValue: undefined, details: undefined };
        } else {
          return { ...state, details: undefined };
        }
      case this._listRoutine.REQUEST:
        return { ...state, loading: true, created: false, deleted: false, updated: false, simpleSearchOptionsActive: false, simpleSearchOptionsValue: undefined };
      case this._searchRoutine.SUCCESS:
      case this._listRoutine.SUCCESS:
        return { ...state, loading: false, list: action.payload, successed: true };
      case this._createRoutine.REQUEST:
        return { ...state, creating: true };
      case this._createRoutine.SUCCESS:
        history.goBack();
        return { ...state, creating: false, created: true };
      case this._deleteRoutine.REQUEST:
        return { ...state, deleteting: true };
      case this._deleteRoutine.SUCCESS:
        const newList = state.list;
        if (newList !== undefined) {
          newList.entity.total = newList.entity.total - 1;
          newList.entity.data = newList.entity.data.filter((entity: T) => entity._id !== action.payload) as [T];
          if (!newList.entity.data.length) {
            newList.entity.page = newList.entity.page - 1;
          }
        }
        return { ...state, deleteting: false, deleted: true, list: newList };
      case this._viewRoutine.SUCCESS:
        return { ...state, details: state.list?.entity.data.find((entity) => entity._id === action.payload) };
      case this._updateRoutine.REQUEST:
        return { ...state, updating: true };
      case this._updateRoutine.SUCCESS:
        history.goBack();
        return { ...state, updating: false, updated: true };
      case this._sortRoutine.TRIGGER:
        return { ...state, ...action.payload };
      case '@@router/LOCATION_CHANGE':
        return { ...state, simpleSearchOptionsActive: undefined };
      default:
        return state;
    }
  }
}
