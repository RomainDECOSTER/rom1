import IProposedSubectModel from "./IProposedSubectModel";

class ProposedSubjectModel {
  private _proposedSubject: IProposedSubectModel;

  constructor(proposedSubject: IProposedSubectModel) {
    this._proposedSubject = proposedSubject;
  }

  get name(): string {
    return this._proposedSubject.name;
  }
  get type(): string {
    return this._proposedSubject.type;
  }
  get level(): string {
    return this._proposedSubject.level;
  }
}

export default ProposedSubjectModel;
