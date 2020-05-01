import mongoose = require("mongoose");
import IEntityModel from "../model/IEntityModel";

interface IRepositoryBase<T extends IEntityModel> {
  /*
        read operation
    */
  retrieve(options?: Object, pageNumber?: number, itemNumber?: number, sortKey?: string, sortDir?: string): Promise<IEntityModel[]>;
  findOne(options: Object): Promise<IEntityModel>;
  findById(entityId: string): Promise<IEntityModel>;

  count(cond?: Object): Promise<number>;

  /*
        write operation
    */
  create(entity: T): Promise<IEntityModel>;
  update(entityId: string, entity: any): Promise<IEntityModel>;
  remove(entityId: string): Promise<{ ok?: number; n?: number } & { deletedCount?: number }>;
  removeBatch(cond?: Object): Promise<{ ok?: number; n?: number } & { deletedCount?: number }>;
}

export default IRepositoryBase;
