import IEntityModel from '../Api/Datamodel/IEntityModel';
import IPageableIEntityModel from '../Api/Datamodel/IPageableIEntityModel';
import { BaseActions } from '../Tools/BaseActions';

export interface IEntitySate<T extends IEntityModel, K extends IPageableIEntityModel<T>> {
  list?: K;
  details?: T;
  loading?: boolean;
  successed?: boolean;
  failure?: boolean;
  creating?: boolean;
  created?: boolean;
}

export interface IEntityRedux<T extends IEntityModel, K extends IPageableIEntityModel<T>> {
  getReducer(state: IEntitySate<T, K>, action: BaseActions): IEntitySate<T, K>;
}
