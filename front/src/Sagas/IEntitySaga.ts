import IEntityModel from '../Api/Datamodel/IEntityModel';
import IPageableIEntityModel from '../Api/Datamodel/IPageableIEntityModel';
import { BaseActions } from '../Tools/BaseActions';

export interface IEntitySaga<T extends IEntityModel, K extends IPageableIEntityModel<T>> {
  watchListRoutine(): any;
  getListFromServer(): any;
  watchCreateRoutine(): any;
  watchDeleteRoutine(): any;
  deleteEntity(): any;
  watchUserViewRoutine(): any;
  setUserView(): any;
  updateEntity(): any;
  watchUpdateEntityRoutine(): any;
}
