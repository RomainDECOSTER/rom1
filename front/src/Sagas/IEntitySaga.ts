import IEntityModel from '../Api/Datamodel/IEntityModel';
import IPageableIEntityModel from '../Api/Datamodel/IPageableIEntityModel';
import { BaseActions } from '../Tools/BaseActions';
import { State } from '../Reducers';

export interface IEntitySaga<T extends IEntityModel, K extends IPageableIEntityModel<T>> {
  runSaga(): any;
  watchListRoutine(): any;
  getListFromServer(): any;
  watchCreateRoutine(): any;
  watchDeleteRoutine(): any;
  deleteEntity(): any;
  watchEntityViewRoutine(): any;
  setUserView(): any;
  updateEntity(): any;
  watchUpdateEntityRoutine(): any;
  searchEntity(): any;
  watchSearchEntity(): any;
}
