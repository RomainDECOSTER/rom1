import RepositoryBase from "./RepositoryBase";
import IWorkshopModel from "../model/IWorkshopModel";
import IWorshopRepository from "./IWorkshopRepository";
import { Model } from "mongoose";
import WorkshopSchema from "../schema/WorkshopSchema";

class WorkshopRepository extends RepositoryBase<IWorkshopModel> implements IWorshopRepository {
  private _dbContext: Model<IWorkshopModel>;
  constructor();
  constructor(dbContext: Model<IWorkshopModel> = WorkshopSchema) {
    super(dbContext);
    this._dbContext = dbContext;
  }
}

Object.seal(WorkshopRepository);

export default WorkshopRepository;
