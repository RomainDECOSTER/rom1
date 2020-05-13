import RoutesBase from "./RoutesBase";
import IWorkshopController from "../controllers/IWorshopController";
import WorkshopController from "../controllers/WorkshopController";

const defaultRules: Object = {
  create: "admin",
  update: "admin",
  remove: "admin",
  findById: ["admin", "team"],
  retrieve: ["admin", "team"],
  search: ["admin", "team"],
};

class WorkshopRoutes extends RoutesBase<IWorkshopController> {
  private _workshopController: IWorkshopController;

  constructor() {
    super(new WorkshopController(), "/workshops", defaultRules);
    this._workshopController = new WorkshopController();
  }
}

export default WorkshopRoutes;
