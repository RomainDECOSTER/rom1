import IRepositoryBase from "../repository/IRepositoryBase";
import IEntityModel from "../model/IEntityModel";
import Utilities from "../model/Utilities";
import { CommonError } from "../../tools/errors/CommonError";

class ServiceBase<T extends IEntityModel> {
  private _repository: IRepositoryBase<T>;

  constructor(repository: IRepositoryBase<T>) {
    this._repository = repository;
  }

  async create(item: T) {
    try {
      await this._repository.create(item);
    } catch (error) {
      throw new CommonError("Create entity error", error);
    }
  }

  async retrieve(pageNumber: number = 0, itemNumber: number = 10) {
    try {
      const results = await this._repository.retrieve({}, pageNumber, itemNumber);
      const total = await this._repository.count({});
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
        return this._repository.update(id, item);
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
        return this._repository.remove(entityId);
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
