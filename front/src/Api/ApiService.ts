import { AxiosResponse, AxiosRequestConfig } from 'axios';
import IEntityModel from './Datamodel/IEntityModel';
import IApiService from './IApiService';
import { AxiosInstance } from '../Tools/Axios';
import IPageableIEntityModel from './Datamodel/IPageableIEntityModel';
import { store } from '../store';
import UrlAssembler from 'url-assembler';

export class ApiService<T extends IEntityModel, K extends IPageableIEntityModel<T>> implements IApiService<T, K> {
  private _entityBaseName: string;

  constructor(entityBaseName: string) {
    this._entityBaseName = entityBaseName;
  }
  update(doc: T): void {
    AxiosInstance.put(`${this._entityBaseName}/${doc._id}`, doc, this.getHeaders());
  }
  delete(id: string): void {
    AxiosInstance.delete(`${this._entityBaseName}/${id}`, this.getHeaders());
  }

  findBy(id: string): Promise<AxiosResponse<T>> {
    return AxiosInstance.get<T>(`${this._entityBaseName}/${id}`, this.getHeaders());
  }

  search(options?: any): Promise<AxiosResponse<K>> {
    const url = UrlAssembler().template(`${this._entityBaseName}/search`).query(options).toString();
    return AxiosInstance.get<K>(url, this.getHeaders());
  }

  retrieve(options?: any): Promise<AxiosResponse<K>> {
    const url = UrlAssembler().template(this._entityBaseName).query(options).toString();
    return AxiosInstance.get<K>(url, this.getHeaders());
  }

  create(entity: T): void {
    const url = this._entityBaseName;
    AxiosInstance.post(url, { ...entity }, this.getHeaders());
  }

  protected getHeaders(): AxiosRequestConfig {
    return {
      headers: {
        Authorization: store.getState().user.authentication?.token,
      },
    };
  }
}
