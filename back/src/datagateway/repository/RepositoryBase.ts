import mongoose = require("mongoose");
import IRepositoryBase from "./IRepositoryBase";
import IEntityModel from "../model/IEntityModel";

class RepositoryBase<T extends IEntityModel> implements IRepositoryBase<T> {
  private _model: mongoose.Model<IEntityModel>;

  constructor(schemaModel: mongoose.Model<IEntityModel>) {
    this._model = schemaModel;
  }

  create(item: T): Promise<IEntityModel> {
    return this._model.create(item);
  }

  retrieve(options: Object, pageNumber: number = 1, itemNumber: number = 10, sortKey?: string, sortDir?: string): Promise<IEntityModel[]> {
    const sortEnum = { asc: 1, desc: -1 };
    const query = this._model
      .find(options || {})
      .skip(itemNumber * pageNumber - itemNumber)
      .limit(itemNumber);
    if (sortKey && sortDir) {
      query.sort([[sortKey, sortEnum[sortDir.toLowerCase()]]]);
    }
    return query.populate("workshops campaign").exec();
  }

  findOne(options: any): Promise<IEntityModel> {
    return this._model.findOne(options).exec();
  }

  update(entityId: string, entity: any): Promise<IEntityModel> {
    return this._model.updateOne({ _id: entityId }, entity).exec();
  }

  remove(entityId: string): Promise<{ ok?: number; n?: number } & { deletedCount?: number }> {
    return this._model.deleteOne({ _id: entityId }).exec();
  }

  removeBatch(cond?: Object): Promise<{ ok?: number; n?: number } & { deletedCount?: number }> {
    return this._model.deleteMany(cond || {}).exec();
  }

  findById(entityId: string): Promise<IEntityModel> {
    return this._model.findById(entityId).populate("workshops campaign").exec();
  }

  count(cond?: Object): Promise<number> {
    return this._model.countDocuments(cond || {}).exec();
  }

  private toObjectId(id: string): mongoose.Types.ObjectId {
    return new mongoose.Types.ObjectId(id);
  }
}

export default RepositoryBase;
