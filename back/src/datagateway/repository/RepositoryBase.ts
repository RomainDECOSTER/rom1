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

  retrieve(options: Object): Promise<IEntityModel[]> {
    return this._model.find(options || {}).exec();
  }

  findOne(options: any): Promise<IEntityModel> {
    return this._model.findOne(options).exec();
  }

  update(entityId: string, entity: any): Promise<IEntityModel> {
    return this._model.update({ _id: entityId }, entity).exec();
  }

  remove(entityId: string): Promise<{ ok?: number; n?: number } & { deletedCount?: number }> {
    return this._model.deleteOne({ _id: entityId }).exec();
  }

  removeBatch(cond?: Object): Promise<{ ok?: number; n?: number } & { deletedCount?: number }> {
    return this._model.deleteMany(cond || {}).exec();
  }

  findById(entityId: string): Promise<IEntityModel> {
    return this._model.findById(entityId).exec();
  }

  count(cond?: Object): Promise<number> {
    return this._model.count(cond || {}).exec();
  }

  private toObjectId(id: string): mongoose.Types.ObjectId {
    return new mongoose.Types.ObjectId(id);
  }
}

export default RepositoryBase;
