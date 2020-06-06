import mongoose = require("mongoose");
import IRepositoryBase from "./IRepositoryBase";
import IEntityModel from "../model/IEntityModel";

class RepositoryBase<T extends IEntityModel> implements IRepositoryBase<T> {
  private _model: mongoose.Model<IEntityModel>;

  constructor(schemaModel: mongoose.Model<IEntityModel>) {
    this._model = schemaModel;
  }
  search(key: string, value: any, pageNumber?: number, itemNumber?: number, sortKey?: string, sortDir?: string): Promise<IEntityModel[]> {
    const options = {};
    options[key] = new RegExp(`${value}.*`, "i");
    return this.retrieve(options, pageNumber, itemNumber, sortKey, sortDir);
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
    if (entity.campaign !== undefined) {
      return this.updateWithcampaign(entityId, entity);
    }
    return this._model.updateOne({ _id: entityId }, entity).exec();
  }

  async updateWithcampaign(entityId, entity: any): Promise<IEntityModel> {
    const currentEntity: any = await this._model.findOne({ _id: entityId }).exec();
    if (currentEntity.campaign === undefined) {
      return this._model.updateOne({ _id: entityId }, entity).exec();
    }
    if (String(currentEntity.campaign) === String(entity.campaign)) {
      return this._model.updateOne({ _id: entityId }, entity).exec();
    }
    if (currentEntity.campaign_history.length === 0) {
      currentEntity.campaign_history = [];
      entity.campaign_history.push(currentEntity);
      return this._model.updateOne({ _id: entityId }, entity).exec();
    }
    const index = currentEntity.campaign_history.map((e) => e.campaign).indexOf(entity.campaign);
    if (index === -1) {
      currentEntity.campaign_history = [];
      entity.campaign_history.push(currentEntity);
      return this._model.updateOne({ _id: entityId }, entity).exec();
    } else {
      currentEntity.campaign_history = [];
      entity.campaign_history[index] = currentEntity;
      return this._model.updateOne({ _id: entityId }, entity).exec();
    }
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
