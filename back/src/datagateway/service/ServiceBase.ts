import IRepositoryBase from "../repository/IRepositoryBase";
import IEntityModel from "../model/IEntityModel";
import Utilities from "../model/Utilities";
import { CommonError } from "../../tools/errors/CommonError";

class ServiceBase<T extends IEntityModel> {
  private _repository: IRepositoryBase<T>;

  constructor(repository: IRepositoryBase<T>) {
    this._repository = repository;
  }

  // add options and send it to repository (add to repo for search)

  async create(item: T) {
    try {
      const entity = await this._repository.create(item);
      return entity;
    } catch (error) {
      throw new CommonError("Create entity error", error);
    }
  }

  async search(key: string, value: any, pageNumber?: number, itemNumber?: number, sortKey?: string, sortDir?: string, campaignId?: any) {
    try {
      const options: any = {};
      options[key] = new RegExp(`${value}.*`, "i");
      if (campaignId !== undefined) {
        options.campaign = campaignId;
      }
      const results = await this._repository.retrieve(options, pageNumber, itemNumber, sortKey, sortDir);
      return {
        data: results,
        total: results.length,
        page: pageNumber,
        items: itemNumber,
        pages: Math.ceil(results.length / itemNumber),
      };
    } catch (error) {
      throw new CommonError("Search service error", error);
    }
  }

  async retrieve(pageNumber: number = 1, itemNumber: number = 10, sortKey: string, sortDir: string, campaignId?: any) {
    try {
      const options: any = {};
      if (campaignId !== undefined) {
        options.campaign = campaignId;
      }
      const results = await this._repository.retrieve(options, pageNumber, itemNumber, sortKey, sortDir);
      const total = await this._repository.count(options);
      return {
        data: results,
        total,
        page: pageNumber,
        items: itemNumber,
        pages: Math.ceil(total / itemNumber),
      };
    } catch (error) {
      throw new CommonError("Retrieve service error", error);
    }
  }

  async update(id: string, item: any) {
    try {
      const entity: IEntityModel = await this._repository.findById(id);
      if (!Utilities.isNullorEmpty(entity)) {
        const entity = await this._repository.update(id, item);
        return entity;
      } else {
        throw new CommonError("Entity not found for id " + id);
      }
    } catch (error) {
      throw new CommonError("Update Service error", error);
    }
  }

  async remove(entityId: string) {
    try {
      const entity: IEntityModel = await this._repository.findById(entityId);
      if (!Utilities.isNullorEmpty(entity)) {
        await this._repository.remove(entityId);
        return;
      } else {
        throw new CommonError("Entity not found for id " + entityId);
      }
    } catch (error) {
      throw new CommonError("Remove service error", error);
    }
  }

  async findById(id: string) {
    try {
      const entity: IEntityModel = await this._repository.findById(id);
      return entity;
    } catch (error) {
      throw new CommonError("FindById service error", error);
    }
  }
}

export default ServiceBase;
