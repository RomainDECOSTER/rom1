import { AxiosResponse, AxiosRequestConfig } from 'axios';
import IEntityModel from './Datamodel/IEntityModel';
import IApiService from './IApiService';
import { AxiosInstance } from '../Tools/Axios';
import IPageableIEntityModel from './Datamodel/IPageableIEntityModel';
import { store } from '../store';

export class ApiService<T extends IEntityModel, K extends IPageableIEntityModel<T>> implements IApiService<T, K> {
  private _entityBaseName: string;

  constructor(entityBaseName: string) {
    this._entityBaseName = entityBaseName;
  }
  findBy(id: string): Promise<AxiosResponse<T>> {
    return AxiosInstance.get<T>(`${this._entityBaseName}/${id}`, this.getHeaders());
  }

  retrieve(options?: Object | undefined, pageNumber?: number | undefined, itemNumber?: number | undefined): Promise<AxiosResponse<K>> {
    let url = this._entityBaseName;
    if (pageNumber !== undefined && itemNumber !== undefined) {
      url = `${url}?page=${pageNumber}&items=${itemNumber}`;
    } else if (pageNumber !== undefined && itemNumber === undefined) {
      url = `${url}?page=${pageNumber}`;
    } else if (pageNumber === undefined && itemNumber !== undefined) {
      url = `${url}?items=${itemNumber}`;
    }
    return AxiosInstance.get<K>(url, this.getHeaders());
  }

  protected getHeaders(): AxiosRequestConfig {
    return {
      headers: {
        Authorization: store.getState().user.authentication?.token,
      },
    };
  }
}
