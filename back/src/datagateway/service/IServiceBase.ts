import IEntityModel from "../model/IEntityModel";

interface IServiceBase<T extends IEntityModel> {
  /*
     read operation
 */
  retrieve(pageNumber?: number, itemNumber?: number, sortKey?: string, sortDir?: string): Promise<any>;
  findById(id: string): Promise<IEntityModel>;

  /*
        write operation
    */
  create(item: T): Promise<IEntityModel>;
  update(id: string, item: IEntityModel): Promise<IEntityModel>;
  remove(id: string): Promise<void>;
}
export default IServiceBase;
