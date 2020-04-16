import IRegistrationModel from "./IRegistrationModel";

class RegistrationModel {
  private _registration: IRegistrationModel;

  constructor(registration: IRegistrationModel) {
    this._registration = registration;
  }

  get date(): Date {
    return this._registration.date;
  }
  get number(): number {
    return this._registration.number;
  }
  get fresh(): boolean {
    return this._registration.fresh;
  }
  get first_date(): Date {
    return this._registration.first_date;
  }
  get know_lacle(): string {
    return this._registration.know_lacle;
  }
  get other_known(): string {
    return this._registration.other_known;
  }
}

Object.seal(RegistrationModel);

export default RegistrationModel;
