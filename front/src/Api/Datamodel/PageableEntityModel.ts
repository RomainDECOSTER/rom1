import IPageableIEntityModel from './IPageableIEntityModel';
import IEntityModel from './IEntityModel';

export default class PageableEntityModel<K extends IEntityModel, T extends IPageableIEntityModel<K>> {
  private _pageableModel: T;
  constructor(pageableModel: T) {
    this._pageableModel = pageableModel;
  }

  get success(): string {
    return this._pageableModel.success;
  }

  get entity(): Object {
    return this._pageableModel.entity;
  }

  get data(): [K] {
    return this._pageableModel.entity.data;
  }

  get page(): number {
    return this._pageableModel.entity.page;
  }

  get pages(): number {
    return this._pageableModel.entity.pages;
  }

  get items(): number {
    return this._pageableModel.entity.items;
  }

  get total(): number {
    return this._pageableModel.entity.total;
  }
}
