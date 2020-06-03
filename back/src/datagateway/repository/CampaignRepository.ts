import RepositoryBase from "./RepositoryBase";
import ICampaignModel from "../model/ICampaignModel";
import ICampaignRepository from "./ICampaignRepository";
import { Model } from "mongoose";
import CampaigneSchema from "../schema/CampaigneSchema";

class CampaignRepository extends RepositoryBase<ICampaignModel> implements ICampaignRepository {
  private _dbContext: Model<ICampaignModel>;
  constructor(dbContect: Model<ICampaignModel> = CampaigneSchema) {
    super(dbContect);
    this._dbContext = dbContect;
  }
}

Object.seal(CampaignRepository);

export default CampaignRepository;
