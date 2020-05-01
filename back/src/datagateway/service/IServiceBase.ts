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
  create(item: T): void;
  update(id: string, item: IEntityModel): void;
  remove(id: string): void;
}
export default IServiceBase;
