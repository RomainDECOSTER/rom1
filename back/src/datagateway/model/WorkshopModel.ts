import IWorkshopModel from "./IWorkshopModel";

class WorkshopModel {
  private _workshop: IWorkshopModel;

  constructor(workshop: IWorkshopModel) {
    this._workshop = workshop;
  }

  get name(): string {
    return this._workshop.name;
  }
}

Object.seal(WorkshopModel);

export default WorkshopModel;
