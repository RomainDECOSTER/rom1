import mongoose = require("mongoose");
import IRepositoryBase from "../repository/IRepositoryBase";
import IEntityModel from "../model/IEntityModel";
import Utilities from "../model/Utilities";

class ServiceBase<T extends IEntityModel> {
  private _repository: IRepositoryBase<T>;

  constructor(repository: IRepositoryBase<T>) {
    this._repository = repository;
  }

  async create(item: T) {
    try {
      await this._repository.create(item);
    } catch (error) {
      throw new Error("Create service error");
    }
  }

  async retrieve(pageNumber: number = 0, itemNumber: number = 10) {
    try {
      const results = await this._repository.retrieve({}, pageNumber, itemNumber);
      return {
        data: results,
        totalNum: results.length,
      };
    } catch (error) {
      throw new Error("Retrieve service error");
    }
  }

  async update(id: string, item: any) {
    try {
      const entity: IEntityModel = await this._repository.findById(id);
      if (!Utilities.isNullorEmpty(entity)) {
        return this._repository.update(id, item);
      } else {
        throw new Error("Entity not found for id " + id);
      }
    } catch (error) {
      throw new Error("Update Service error");
    }
  }

  async remove(entityId: string) {
    try {
      const entity: IEntityModel = await this._repository.findById(entityId);
      if (!Utilities.isNullorEmpty(entity)) {
        return this._repository.remove(entityId);
      } else {
        throw new Error("Entity not found for id " + entityId);
      }
    } catch (error) {
      throw new Error("Remove service error");
    }
  }

  async findById(id: string) {
    try {
      const entity: IEntityModel = await this._repository.findById(id);
      return entity;
    } catch (error) {
      throw new Error("FindById service error");
    }
  }
}

export default ServiceBase;
