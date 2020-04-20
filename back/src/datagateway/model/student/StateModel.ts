import IStateModel from "./IStateModel";

class StateModel {
  private _state: IStateModel;

  constructor(state: IStateModel) {
    this._state = state;
  }

  get salary(): boolean {
    return this._state.salary;
  }
  get plainTime(): boolean {
    return this._state.plainTime;
  }
  get middleTime(): boolean {
    return this._state.middleTime;
  }
  get CDD(): boolean {
    return this._state.CDD;
  }
  get CDI(): boolean {
    return this._state.CDI;
  }
  get INTERIM(): boolean {
    return this._state.INTERIM;
  }
  get help(): boolean {
    return this._state.help;
  }
  get employmentAsker(): boolean {
    return this._state.employmentAsker;
  }
  get homeChildren(): boolean {
    return this._state.homeChildren;
  }
  get countryAsker(): boolean {
    return this._state.countryAsker;
  }
  get home(): boolean {
    return this._state.home;
  }
  get AAH(): boolean {
    return this._state.AAH;
  }
  get ESAT(): boolean {
    return this._state.ESAT;
  }
  get youngAlone(): boolean {
    return this._state.youngAlone;
  }
  get other(): boolean {
    return this._state.other;
  }
  get ESATDetails(): string {
    return this._state.ESATDetails;
  }
  get employmentAskerDate(): Date {
    return this._state.employmentAskerDate;
  }
  get otherDetails(): string {
    return this._state.otherDetails;
  }
  get comment(): string {
    return this._state.comment;
  }
  get RSA(): boolean {
    return this._state.RSA;
  }
}

Object.seal(StateModel);

export default StateModel;
