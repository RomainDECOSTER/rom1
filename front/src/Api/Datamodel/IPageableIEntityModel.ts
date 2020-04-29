import IEntityModel from './IEntityModel';

export default interface IPageableIEntityModel<T extends IEntityModel> {
  success: string;
  entity: {
    data: [T];
    total: number;
    page: number;
    items: number;
    pages: number;
  };
}
