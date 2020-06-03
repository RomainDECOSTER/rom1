import ServiceBase from "./ServiceBase";
import ICampaignModel from "../model/ICampaignModel";
import ICampaignService from "./ICampaignService";
import ICampaignRepository from "../repository/ICampaignRepository";
import CampaignRepository from "../repository/CampaignRepository";

class CampaignService extends ServiceBase<ICampaignModel> implements ICampaignService {
  private _repo: ICampaignRepository;

  constructor();
  constructor(repo: ICampaignRepository = new CampaignRepository()) {
    super(repo);
    this._repo = repo;
  }
}

Object.seal(CampaignService);
export default CampaignService;
