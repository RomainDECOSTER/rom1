import IGeneralInformationModel from "./IGeneralInformationModel";

import IAddressModel from "./IAddressModel";

class GeneralInformationModel {
  private _generalInformation: IGeneralInformationModel;

  constructor(generalInformation: IGeneralInformationModel) {
    this._generalInformation = generalInformation;
  }

  get sexe(): string {
    return this._generalInformation.sexe;
  }
  get first_name(): string {
    return this._generalInformation.first_name;
  }
  get last_name(): string {
    return this._generalInformation.last_name;
  }
  get maiden_name(): string {
    return this._generalInformation.maiden_name;
  }
  get birth_date(): Date {
    return this._generalInformation.birth_date;
  }
  get birth_place(): string {
    return this._generalInformation.birth_place;
  }
  get origin(): string {
    return this._generalInformation.origin;
  }
  get nationality(): string {
    return this._generalInformation.nationality;
  }
  get native_language(): string {
    return this._generalInformation.native_language;
  }
  get arrival_date(): string {
    return this._generalInformation.arrival_date;
  }
  get mobile(): string {
    return this._generalInformation.mobile;
  }
  get redList(): boolean {
    return this._generalInformation.redList;
  }
  get address(): IAddressModel {
    return this._generalInformation.address;
  }
  get email(): string {
    return this._generalInformation.email;
  }
  get medical_elements(): string {
    return this._generalInformation.medical_elements;
  }
}
