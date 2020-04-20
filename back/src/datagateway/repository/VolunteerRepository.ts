import { Model } from "mongoose";

import RepositoryBase from "./RepositoryBase";
import IVolunteerModel from "../model/volunteer/IVolunteerModel";
import IVolunteerRepository from "./IVolunteerRepository";
import VolunteerSchema from "../schema/volunteer/VolunteerSchema";

class VolunteerRepository extends RepositoryBase<IVolunteerModel> implements IVolunteerRepository {
  private _dbContext: Model<IVolunteerModel>;

  constructor();
  constructor(dbContext: Model<IVolunteerModel> = VolunteerSchema) {
    super(dbContext);
    this._dbContext = dbContext;
  }
}

Object.seal(VolunteerRepository);

export default VolunteerRepository;
