import ControllerBase from "./ControllerBase";
import ICampaignModel from "../datagateway/model/ICampaignModel";
import ICampaignController from "./ICampaignController";
import ICampaignService from "../datagateway/service/ICampaignService";
import CampaignService from "../datagateway/service/CampaignService";

class CampaignController extends ControllerBase<ICampaignModel> implements ICampaignController {
  private _campaignService: ICampaignService;

  constructor();
  constructor(campaignService: ICampaignService = new CampaignService()) {
    super(campaignService);
    this._campaignService = campaignService;
  }
}

Object.seal(CampaignController);
export default CampaignController;
