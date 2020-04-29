import IGeneralAvailabilitiesModel from "./IGeneralAvailabilitiesModel";

class GeneralAvailabilitiesModel {
  private _generalAvailabilities: IGeneralAvailabilitiesModel;

  constructor(generalAvailabilities: IGeneralAvailabilitiesModel) {
    this._generalAvailabilities = generalAvailabilities;
  }

  get day(): string {
    return this._generalAvailabilities.day;
  }
  get hours(): [] {
    return this._generalAvailabilities.hours;
  }
}

Object.seal(GeneralAvailabilitiesModel);

export default GeneralAvailabilitiesModel;
