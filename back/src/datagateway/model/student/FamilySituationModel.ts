import IFamilySituationModel from "./IFamilySituationModel";

class FamilySituationModel {
  private _familySituation: IFamilySituationModel;

  constructor(familySituation: IFamilySituationModel) {
    this._familySituation = familySituation;
  }

  get alone(): boolean {
    return this._familySituation.alone;
  }
  get couple(): boolean {
    return this._familySituation.couple;
  }
  get children(): boolean {
    return this._familySituation.children;
  }
}

Object.seal(FamilySituationModel);

export default FamilySituationModel;
