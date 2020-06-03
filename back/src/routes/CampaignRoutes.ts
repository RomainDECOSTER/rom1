import RoutesBase from "./RoutesBase";
import ICampaignController from "../controllers/ICampaignController";
import CampaignController from "../controllers/CampaignController";

const defaultRules: Object = {
  create: "admin",
  update: "admin",
  remove: "admin",
  findById: ["admin", "team"],
  retrieve: ["admin", "team"],
  search: ["admin", "team"],
};

class CampaignRoutes extends RoutesBase<ICampaignController> {
  private _campaignController: ICampaignController;

  constructor() {
    super(new CampaignController(), "/campaigns", defaultRules);
    this._campaignController = new CampaignController();
  }
}

export default CampaignRoutes;
