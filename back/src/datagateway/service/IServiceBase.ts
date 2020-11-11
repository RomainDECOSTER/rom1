import IEntityModel from "../model/IEntityModel";

interface IServiceBase<T extends IEntityModel> {
  /*
     read operation
 */
  // add options
  retrieve(pageNumber?: number, itemNumber?: number, sortKey?: string, sortDir?: string, campaignId?: any): Promise<any>;
  findById(id: string): Promise<IEntityModel>;
  search(key: string, value: any, pageNumber?: number, itemNumber?: number, sortKey?: string, sortDir?: string, campaignId?: any);

  /*
        write operation
    */
  create(item: T): Promise<IEntityModel>;
  update(id: string, item: IEntityModel): Promise<IEntityModel>;
  remove(id: string): Promise<void>;
}
export default IServiceBase;
