import IEntityModel from './Datamodel/IEntityModel';
import IPageableIEntityModel from './Datamodel/IPageableIEntityModel';
import { AxiosResponse } from 'axios';
export default interface IApiService<T extends IEntityModel, K extends IPageableIEntityModel<T>> {
  /*
        read operations
     */
  retrieve(options?: Object, pageNumber?: number, itemNumber?: number, sortKey?: string, sortDir?: string): Promise<AxiosResponse<K>>;
  findBy(id: string): Promise<AxiosResponse<T>>;
  create(doc: T): void;
  delete(id: string): void;
}
