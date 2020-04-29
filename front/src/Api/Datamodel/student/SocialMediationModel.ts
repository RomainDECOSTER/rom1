import ISocialMediationModel from "./ISocialMediationModel";

class SocialMediationModel {
  private _socialMediation: ISocialMediationModel;

  constructor(socialMediation: ISocialMediationModel) {
    this._socialMediation = socialMediation;
  }

  get active(): boolean {
    return this._socialMediation.active;
  }
  get details(): string {
    return this._socialMediation.details;
  }
}

Object.seal(SocialMediationModel);

export default SocialMediationModel;
