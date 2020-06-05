import ICampaignModel from "./ICampaignModel";

class CampaignModel {
  private _campaign: ICampaignModel;

  constructor(campaignModel: ICampaignModel) {
    this._campaign = campaignModel;
  }

  get name(): string {
    return this._campaign.name;
  }
  get description(): string {
    return this._campaign.description;
  }
}

Object.seal(CampaignModel);

export default CampaignModel;
